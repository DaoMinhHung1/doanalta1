import React, { useEffect, useState } from "react";

import { Button, Card, Col, Form, Input, Layout, Menu, Row } from "antd";

import Sider from "antd/es/layout/Sider";
import { BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { useHistory, useLocation } from "react-router-dom";
import { get, getDatabase, onValue, ref, set, update } from "firebase/database";

const Capnhatthietbi: React.FC = () => {
  const location = useLocation();
  const device = location.state?.device;
  const [updatedDevice, setUpdatedDevice] = useState(device);
  const history = useHistory();
  const db = getDatabase();

  const handleMatbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUpdatedDevice((prevState) => ({ ...prevState, matb: value }));
  };

  const handleNametbChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUpdatedDevice((prevState) => ({ ...prevState, nametb: value }));
  };

  const handleAddresstbChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setUpdatedDevice((prevState) => ({ ...prevState, addresstb: value }));
  };

  useEffect(() => {
    if (device && device.uuid) {
      const deviceRef = ref(db, "devices/" + device.uuid);
      console.log(deviceRef);

      onValue(deviceRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setUpdatedDevice((prevState) => ({ ...prevState, ...data }));
        }
      });
    }
  }, [db, device]);

  const handleUpdateDevice = async () => {
    try {
      if (!updatedDevice || !updatedDevice.uid) {
        console.error("UUID thiết bị không hợp lệ!");
        return;
      }

      const deviceRef = ref(db, "devices/" + updatedDevice.uid);
      console.log("ssssss", deviceRef);

      // Tạo một đối tượng chứa các trường dữ liệu cần cập nhật
      const updates = {
        nametb: updatedDevice.nametb,
        addresstb: updatedDevice.addresstb,
        dichvutb: updatedDevice.dichvutb,
        hoatdongtb: updatedDevice.hoatdongtb,
        ketnoitb: updatedDevice.ketnoitb,
        matb: updatedDevice.matb,
      };

      // Cập nhật dữ liệu của thiết bị trong cơ sở dữ liệu thời gian thực
      await update(deviceRef, updates);

      console.log("Cập nhật thiết bị thành công");

      // Cập nhật UI hoặc chuyển hướng đến trang khác sau khi cập nhật thiết bị
      // history.push("/thietbi");
    } catch (error) {
      console.error("Lỗi khi cập nhật thiết bị:", error);
      // Xử lý lỗi nếu cần
    }
  };

  console.log("updatedDevice:", updatedDevice.uid);

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
                <h1 className="titletopbar">Quản lý thiết bị</h1>
              </Col>
            </Row>
            <Row>
              <Card className="card-1">
                <h1 className="titletopbar">Thông tin chi tiết</h1>
                <Row>
                  <Col span={12}>
                    <div>
                      <label>Mã thiết bị</label>
                      <Form.Item name="email">
                        <Input
                          defaultValue={device?.matb}
                          className="input-chung"
                          onChange={handleMatbChange}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <label>Tên thiết bị</label>
                      <Form.Item name="email">
                        <Input
                          defaultValue={device?.nametb}
                          className="input-chung"
                          onChange={handleNametbChange}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <label>Địa chỉ IP</label>
                      <Form.Item name="email">
                        <Input
                          defaultValue={device.addresstb}
                          className="input-chung"
                          onChange={handleAddresstbChange}
                        />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <label>Loại thiết bị</label>
                      <Form.Item name="email">
                        <Input className="input-chung" />
                      </Form.Item>
                    </div>

                    <div>
                      <label>Tên đăng nhập</label>
                      <Form.Item name="email">
                        <Input className="input-chung" />
                      </Form.Item>
                    </div>

                    <div>
                      <label>Mật khẩu</label>
                      <Form.Item name="email">
                        <Input className="input-chung" />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div>
                      <label>Dịch vụ sử dụng</label>
                      <Form.Item name="email">
                        <Input
                          defaultValue={device.dichvutb}
                          className="input-chungdai"
                        />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row>
              <Content
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Button
                  style={{ marginLeft: "-150px" }}
                  className="btn-thietbi2"
                >
                  Hủy bỏ
                </Button>
                <Button
                  style={{ margin: "5px" }}
                  className="btn-thietbi"
                  onClick={handleUpdateDevice}
                >
                  Cập nhật
                </Button>
              </Content>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Capnhatthietbi;
