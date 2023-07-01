import React, { useEffect, useState } from "react";

import { Button, Col, Form, Input, Layout, Menu, Row, Table } from "antd";

import Sider from "antd/es/layout/Sider";
import { HomeOutlined, BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { getDatabase, onValue, ref } from "firebase/database";
import { useHistory } from "react-router-dom";

interface ServiceData {
  madv: string;
  namedv: string;
  motadv: number;
  hoatdongdv: string;
  uuid: string;
}

const Quanlydichvu: React.FC = () => {
  const history = useHistory();
  // const [selectedService, setSelectedService] = useState<ServiceData | null>(
  //   null
  // );

  //nút nhấn chi tiết lưu qua URL
  const handleViewDetails = (serviceID: string) => {
    const selectedService = serviceData.find(
      (service) => service.uuid === serviceID
    );
    if (selectedService) {
      console.log("Selected service:", selectedService);
      history.push(`/chitietdv/${serviceID}`, { service: selectedService });
    } else {
      console.log("Không có dữ liệu dịch vụ");
    }
  };
  const handleUpdate = (serviceID: string) => {
    const selectedService = serviceData.find(
      (service) => service.uuid === serviceID
    );
    if (selectedService) {
      console.log("Selected device:", selectedService);
      // setSelectedService(selectedService);
      history.push(`/capnhatdv/${serviceID}`, { service: selectedService });
    } else {
      console.log("Không có dữ liệu thiết bị");
    }
  };
  // Table
  const columns = [
    {
      title: "Mã dịch vụ",
      dataIndex: "madv",
      key: "madv",
      width: 150,
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "namedv",
      key: "namedv",
      width: 200,
    },
    {
      title: "Mô tả",
      dataIndex: "dessdv",
      key: "dessdv",
      width: 200,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "hoatdongdv",
      key: "hoatdongdv",
      width: 200,
    },

    {
      title: "",
      dataIndex: "viewAction",
      key: "viewAction",
      width: 150,
      render: (_text, record) => (
        <>
          <Button onClick={() => handleViewDetails(record.uuid)}>
            Chi tiết
          </Button>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "updateAction",
      key: "updateAction",
      width: 150,
      render: (_text, record) => (
        <>
          <Button onClick={() => handleUpdate(record.uuid)}>Cập nhật</Button>
        </>
      ),
    },
  ];

  //load dữ liệu từ data xuống
  const [serviceData, setServiceData] = useState<ServiceData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const servicesRef = ref(db, "services");

        onValue(servicesRef, (snapshot) => {
          const data: ServiceData[] = [];
          snapshot.forEach((childSnapshot) => {
            const device = childSnapshot.val() as ServiceData;
            data.push(device);
          });
          setServiceData(data);
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
                Thiết bị Danh sách dịch vụ
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
                  <h1 className="titletopbar">Danh sách dịch vụ</h1>
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
                    <Table columns={columns} dataSource={serviceData} />
                  </div>
                </Col>
                <Col
                  style={{ marginTop: "20px" }}
                  className="hang-table icon-thietbi"
                  span={2}
                >
                  <HomeOutlined
                    onClick={() => {
                      window.location.href = "/themdv";
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

export default Quanlydichvu;
