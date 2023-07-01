import React, { useEffect, useState } from "react";

import { Button, Col, Form, Input, Layout, Menu, Row, Table } from "antd";

import Sider from "antd/es/layout/Sider";
import { HomeOutlined, BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { getDatabase, onValue, ref } from "firebase/database";
import { useHistory } from "react-router-dom";

interface OrderNumbers {
  STT: string;
  namekh: string;
  namedv: string;
  startdate: string;
  enddate: string;
  provide: string;
  id: string;
}
const Quanlycapso: React.FC = () => {
  //Xem chi tiết
  const history = useHistory();

  const handleViewDetails = (orderID: string) => {
    const selectedOrder = order.find((orders) => orders.id === orderID);
    if (selectedOrder) {
      console.log("Selected order:", selectedOrder);
      history.push(`/chitietcs/${orderID}`, { orders: selectedOrder });
    } else {
      console.log("Không có dữ liệu dịch vụ");
    }
  };
  // Table
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "namekh",
      key: "namekh",
      width: 200,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "namedv",
      key: "namedv",
      width: 200,
    },
    {
      title: "Thời gian cấp",
      dataIndex: "startdate",
      key: "startdate",
      width: 120,
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "enddate",
      key: "enddate",
      width: 120,
    },
    {
      title: "Trạng thái",
      dataIndex: "provide",
      key: "provide",
      width: 150,
    },
    {
      title: "Nguồn cấp",
      dataIndex: "provide",
      key: "provide",
      width: 200,
    },
    {
      title: "",
      dataIndex: "chitietAction",
      key: "chitietAction",
      render: (_text, record) => (
        <>
          <Button onClick={() => handleViewDetails(record.id)}>Chi tiết</Button>
        </>
      ),
    },
  ];

  const [order, setOrder] = useState<OrderNumbers[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const orderRef = ref(db, "ordernumbers");

        onValue(orderRef, (snapshot) => {
          const data: OrderNumbers[] = [];
          snapshot.forEach((childSnapshot) => {
            const order = childSnapshot.val() as OrderNumbers;
            data.push(order);
          });
          setOrder(data);
        });
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <Sider
          className="menubar"
          width={200}
          style={{ backgroundColor: "Menu" }}
        >
          <Menu theme="light" className="itembar">
            <img className="alta" src="/asset/img/logoalta.png" alt="" />
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/dashboard";
              }}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/thietbi";
              }}
            >
              Thiết bị
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/dichvu";
              }}
            >
              Dịch vụ
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/capso";
              }}
            >
              Cấp số
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              onClick={() => {
                window.location.href = "/baocao";
              }}
            >
              Báo cáo
            </Menu.Item>
            <Menu.Item className="menu-item">Cài đặt hệ thống</Menu.Item>
            <Menu.Item className="menu-item">Đăng xuất</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="account bgheader">
            <Col span={15}>
              <h1 style={{ marginLeft: "-20px" }} className="titletopbar">
                Thiết bị Quản lý cấp số
              </h1>
            </Col>
            <Col span={5}>
              <div className="">
                <BellOutlined
                  style={{
                    fontSize: "24px",
                    color: "red",
                    marginLeft: "200px",
                  }}
                />
              </div>
            </Col>
            <Col span={2}>
              <img className="imgaccount" src="/asset/img/ao2.jpg" alt="" />
            </Col>
            <Col className="" span={2}>
              <p className="xc">xin chào</p>
              <p className="name">Đào Minh Hùng</p>
            </Col>
          </Header>
          <Layout style={{ marginTop: "-5px" }} className="center-content">
            <Content>
              <Row>
                <Col span={24}>
                  <h1 className="titletopbar">Quản lý cấp số</h1>
                </Col>
              </Row>
              <Row>
                <Col span={7} style={{ marginLeft: "-20px", flex: 1 }}>
                  <div className="form-item">
                    <label>Trạng thái hoạt động</label>
                    <Form.Item name="email">
                      <Input className="form-input" />
                    </Form.Item>
                  </div>
                </Col>
                <Col span={10} style={{ marginLeft: "-20px", flex: 1 }}>
                  <div className="form-thietbi form-item">
                    <label>Chọn thời gian</label>
                    <Form.Item name="email">
                      <div className="">
                        <Input className="form-input" />
                      </div>
                    </Form.Item>
                  </div>
                </Col>
                <Col span={7} style={{ marginLeft: "-20px", flex: 1 }}>
                  <div className="form-thietbi form-item">
                    <label>Từ khóa</label>
                    <Form.Item name="email">
                      <Input className="form-input" />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={22}>
                  <div>
                    <div style={{ marginBottom: 16 }}></div>
                    <Table
                      columns={columns}
                      dataSource={order}
                      pagination={{
                        pageSize: 5,
                        pageSizeOptions: ["5", "10", "15"],
                      }}
                    />
                  </div>
                </Col>
                <Col className="hang-table" span={2}>
                  <HomeOutlined
                    className="icon-thietbi"
                    onClick={() => {
                      window.location.href = "/capsomoi";
                    }}
                  />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Quanlycapso;
