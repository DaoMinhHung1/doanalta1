import React, { useState } from "react";

import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  message,
} from "antd";

import Sider from "antd/es/layout/Sider";
import { BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { DeviceData } from "./../../redux/reduxDevices";
import { getDatabase, push, ref, set } from "firebase/database";

const Themthietbi: React.FC = () => {
  const [deviceData, setDeviceData] = useState<DeviceData>({
    matb: "",
    nametb: "",
    addresstb: "",
    hoatdongtb: "",
    ketnoitb: "",
    dichvutb: "",
    uuid: "",
  });

  // const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDeviceData((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleAddDevice = async () => {
  //   try {
  //     const db = getFirestore();
  //     const devicesCollection = collection(db, "devices");

  //     // Tạo một UUID mới
  //     const newUUID = uuid();

  //     // Gán UUID cho dữ liệu thiết bị
  //     const deviceWithUUID = { ...deviceData, uuid: newUUID };

  //     // Lưu dữ liệu thiết bị có UUID vào Firestore
  //     await addDoc(devicesCollection, deviceWithUUID);

  //     console.log("Thêm thiết bị thành công");

  //     // Cập nhật UI hoặc chuyển hướng đến trang khác sau khi thêm thiết bị
  //   } catch (error) {
  //     console.error("Lỗi khi thêm thiết bị:", error);
  //     // Xử lý lỗi nếu cần
  //   }
  // };
  const handleAddDevice = () => {
    const database = getDatabase();
    const devicesRef = ref(database, "devices");

    const newDeviceRef = push(devicesRef);
    const newDeviceKey = newDeviceRef.key;

    // // Gán UUID cho dữ liệu thiết bị
    // const deviceWithUUID = { ...deviceData, uuid: newUUID };

    const newDeviceData = {
      uuid: newDeviceKey,
      matb: deviceData.matb,
      nametb: deviceData.nametb,
      addresstb: deviceData.addresstb,
      hoatdongtb: deviceData.hoatdongtb,
      ketnoitb: deviceData.ketnoitb,
      dichvutb: deviceData.dichvutb,
    };

    set(newDeviceRef, newDeviceData)
      .then(() => {
        console.log("Thêm thiết bị thành công");
        message.success("Thêm thiết bị thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi thêm thiết bị:", error);
        // Xử lý lỗi nếu cần
      });
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
                      <Form.Item name="mathietbi">
                        <Input
                          className="input-chung"
                          name="matb"
                          value={deviceData.matb}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <label>Tên thiết bị</label>
                      <Form.Item name="ten">
                        <Input
                          className="input-chung"
                          name="nametb"
                          value={deviceData.nametb}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <label>Địa chỉ IP</label>
                      <Form.Item name="ip">
                        <Input
                          className="input-chung"
                          name="addresstb"
                          value={deviceData.addresstb}
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <label>Loại thiết bị</label>
                      {/* <Form.Item name="loai">
                        <Input
                          className="input-chung"
                          name="hoatdongtb"
                          value={deviceData.hoatdongtb}
                          onChange={handleInputChange}
                        />
                      </Form.Item> */}
                    </div>

                    <div>
                      <label>Tên đăng nhập</label>
                      {/* <Form.Item name="login">
                        <Input
                          className="input-chung"
                          name="ketnoitb"
                          value={deviceData.ketnoitb}
                          onChange={handleInputChange}
                        />
                      </Form.Item> */}
                    </div>

                    <div>
                      <label>Mật khẩu</label>
                      {/* <Form.Item name="password">
                        <Input
                          className="input-chung"
                          name="dichvutb"
                          value={deviceData.dichvutb}
                          onChange={handleInputChange}
                        />
                      </Form.Item> */}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div>
                      <label>Dịch vụ sử dụng</label>
                      {/* <Form.Item name="service">
                        <Input
                          className="input-chungdai"
                          name="chitiettb"
                          value={deviceData.chitiettb}
                          onChange={handleInputChange}
                        />
                      </Form.Item> */}
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
                  onClick={handleAddDevice}
                >
                  Thêm thiết bị
                </Button>
              </Content>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Themthietbi;
