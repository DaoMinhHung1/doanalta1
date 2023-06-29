import React from "react";

import { Card, Col, Form, Layout, Menu, Row } from "antd";

import "../StylePages/Home.css";
import Sider from "antd/es/layout/Sider";
import { HomeOutlined, BellOutlined, CameraOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";

const Updateuser: React.FC = () => {
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
            <Menu.Item key="home" icon={<HomeOutlined />} className="menu-item">
              Home
            </Menu.Item>
            <Menu.Item key="settings" className="menu-item">
              Thiết bị
            </Menu.Item>
            <Menu.Item key="settings" className="menu-item">
              Dịch vụ
            </Menu.Item>
            <Menu.Item key="settings" className="menu-item">
              Cấp số
            </Menu.Item>
            <Menu.Item key="settings" className="menu-item">
              Báo cáo
            </Menu.Item>
            <Menu.Item key="settings" className="menu-item">
              Cài đặt hệ thống
            </Menu.Item>
            <Menu.Item key="settings" className="menu-item">
              Đăng xuất
            </Menu.Item>
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
          <Content>
            <Card className="card">
              <Row gutter={16}>
                <Col span={6}>
                  <div className="avatar-container">
                    <img
                      style={{ marginLeft: "-40px" }}
                      className="account-info"
                      src="/asset/img/anhmeo1.webp"
                      alt=""
                    />
                    <div className="camera-icon">
                      <CameraOutlined />
                    </div>
                    <h1 style={{ margin: "20px" }} className="name">
                      Đào Minh Hùng
                    </h1>
                  </div>
                </Col>
                <Col style={{ marginLeft: "-20px" }} span={8}>
                  <div>
                    <label>Tên đăng nhập</label>
                    <Form.Item className="input-dl" name="email"></Form.Item>
                  </div>
                  <div>
                    <label>Tên đăng nhập</label>
                    <Form.Item className="input-dl" name="email"></Form.Item>
                  </div>
                  <div>
                    <label>Tên đăng nhập</label>
                    <Form.Item className="input-dl" name="email"></Form.Item>
                  </div>
                </Col>
                <Col style={{ marginLeft: "70px" }} span={8}>
                  <div>
                    <label>Tên đăng nhập</label>
                    <Form.Item className="input-dl" name="email"></Form.Item>
                  </div>
                  <div>
                    <label>Tên đăng nhập</label>
                    <Form.Item className="input-dl" name="email"></Form.Item>
                  </div>
                  <div>
                    <label>Tên đăng nhập</label>
                    <Form.Item className="input-dl" name="email"></Form.Item>
                  </div>
                </Col>
              </Row>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Updateuser;
