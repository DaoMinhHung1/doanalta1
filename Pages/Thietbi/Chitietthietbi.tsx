import React from "react";

import { Card, Col, Layout, Menu, Row } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Header, Content } from "antd/lib/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useLocation } from "react-router-dom";

const Chitietthietbi: React.FC = () => {
  const location = useLocation();
  const device = location.state?.device;

  // Sử dụng dữ liệu thiết bị trong trang Chitiettb
  console.log("Device:", device);

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
                Thiết bị Danh sách thiết bị
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
                  <h1 className="titletopbar">Danh sách thiết bị</h1>
                </Col>
              </Row>
              <Card className="">
                <h1 className="titletopbar">Thông tin chi tiết</h1>
                <Row>
                  <Col span={12}>
                    <div>
                      <label className="chu" htmlFor="">
                        Mã thiết bị
                      </label>
                      <p>{device.matb}</p>
                    </div>
                    <div>
                      <label className="chu marginchu" htmlFor="">
                        Tên thiết bị
                      </label>
                      <p>{device.nametb}</p>
                    </div>
                    <div>
                      <label className="chu marginchu" htmlFor="">
                        Địa chỉ IP
                      </label>
                      <p>{device.addresstb}</p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <label className="chu " htmlFor="">
                        Loại thiết bị
                      </label>
                    </div>
                    <div>
                      <label className="chu marginchu" htmlFor="">
                        Tên đăng nhập
                      </label>
                    </div>
                    <div>
                      <label className="chu marginchu" htmlFor="">
                        Mật khẩu
                      </label>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: "50px" }}>
                  <Col span={24}>
                    <label className="chu " htmlFor="">
                      Dịch vụ sử dụng
                    </label>
                    <p>Khám tim mạch</p>
                  </Col>
                </Row>
              </Card>
              {/* <Col className="hang-table" span={2}>
                  <HomeOutlined
                    className="icon-thietbi"
                    onClick={() => {
                      window.location.href = "/addtb";
                    }}
                  />
                </Col> */}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Chitietthietbi;
