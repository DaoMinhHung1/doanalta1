import React, { useState } from "react";

import {
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Modal,
  Row,
  Select,
  message,
} from "antd";

import Sider from "antd/es/layout/Sider";
import { BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { getDatabase, push, ref, set } from "firebase/database";

interface OrderNumbers {
  STT: string;
  namekh: string;
  namedv: string;
  startdate: string;
  enddate: string;
  provide: string;
  uuid: string;
}

const Capsomoi: React.FC = () => {
  const [orderNumbers, setOrderNumbers] = useState<OrderNumbers>({
    STT: "",
    namekh: "",
    namedv: "",
    startdate: "",
    enddate: "",
    provide: "",
    uuid: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderNumbers | null>(null);
  const [currentNumber, setCurrentNumber] = useState(1);

  const generateRandomNumber = (): string => {
    const randomNumber = String(currentNumber).padStart(7, "0");
    setCurrentNumber((prevNumber) => prevNumber + 1);
    return randomNumber;
  };

  const handleSelectChange = (value: string) => {
    setOrderNumbers((prevState) => ({
      ...prevState,
      namedv: value,
    }));
  };

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const handleAddNumber = () => {
    const database = getDatabase();
    const orderRef = ref(database, "ordernumbers");

    const newOrderRef = push(orderRef);
    const newOrderKey = newOrderRef.key;

    // Tính toán ngày kết thúc
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + 5);

    const newOrderData = {
      uuid: newOrderKey,
      STT: generateRandomNumber(),
      namekh: orderNumbers.namekh,
      namedv: orderNumbers.namedv,
      startdate: formatDate(currentDate),
      enddate: formatDate(endDate),
      provide: orderNumbers.provide,
    };

    set(newOrderRef, newOrderData)
      .then(() => {
        message.success("Thêm dịch vụ thành công!");
        showModal(newOrderData);
      })
      .catch((error) => {
        console.error("Lỗi khi thêm dịch vụ:", error);
      });
  };

  const showModal = (orderData) => {
    setSelectedOrder(orderData);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
              <h1 className="titletopbar">Thông tin cá nhân</h1>
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
          <Content style={{ marginLeft: "70px" }}>
            <Row>
              <Col span={24}>
                <h1 className="titletopbar">Quản lý cấp số</h1>
              </Col>
            </Row>
            <Row>
              <Card
                style={{
                  display: "flex",
                  justifyContent: "center",

                  height: "450px",
                }}
                className="card-1"
              >
                <h1 style={{ textAlign: "center" }} className="titletopbar">
                  Cấp số mớit
                </h1>
                <h1 style={{ textAlign: "center" }} className="chu">
                  Dịch vụ khách hàng lựa chọn
                </h1>
                <Select
                  style={{ width: "450px" }}
                  className="select-chung"
                  onChange={handleSelectChange}
                >
                  <Select.Option value="Khám tim mạch">
                    Khám tim mạch
                  </Select.Option>
                  <Select.Option value="Khám sản - Phụ khoa">
                    Khám sản - Phụ khoa
                  </Select.Option>
                  <Select.Option value="Khám răng hàm mặt">
                    Khám răng hàm mặt
                  </Select.Option>
                  <Select.Option value="Khám tai mũi họng">
                    Khám tai mũi họng
                  </Select.Option>
                </Select>
                <Content
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                  }}
                >
                  <Button className="btn-thietbi2">Hủy bỏ</Button>
                  <Button
                    style={{ marginLeft: "20px" }}
                    className="btn-thietbi"
                    onClick={handleAddNumber}
                  >
                    Cấp số
                  </Button>
                </Content>
              </Card>
            </Row>
            <Modal
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null}
              maskClosable={false}
            >
              <h1>Số thứ tự được cấp</h1>
              {selectedOrder && (
                <>
                  <p>STT: {selectedOrder.STT}</p>
                  <p>Tên dịch vụ: {selectedOrder.namedv}</p>
                  <p>Thời gian cấp: {selectedOrder.startdate}</p>
                  <p>Hạn sử dụng: {selectedOrder.enddate}</p>
                </>
              )}
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Capsomoi;
