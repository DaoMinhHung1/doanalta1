import React, { useState } from "react";

import { Button, Card, Col, Form, Input, Layout, Menu, Row } from "antd";

import "../StylePages/Home.css";
import Sider from "antd/es/layout/Sider";
import { HomeOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";

const Addthietbi: React.FC = () => {
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
            <Menu.Item className="menu-item">Dịch vụ</Menu.Item>
            <Menu.Item className="menu-item">Cấp số</Menu.Item>
            <Menu.Item className="menu-item">Báo cáo</Menu.Item>
            <Menu.Item className="menu-item">Cài đặt hệ thống</Menu.Item>
            <Menu.Item className="menu-item">Đăng xuất</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="account bgheader">
            <Row>
              <Col span={24}>
                <h1 className="titletopbar">Thiết bị Danh sách thiết bị</h1>
              </Col>
            </Row>
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
                      <label>Tên đăng nhập</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
                      </Form.Item>
                    </div>

                    <div>
                      <label>Mật khẩu</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
                      </Form.Item>
                    </div>

                    <div>
                      <label>Tên đăng nhập</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <label>Tên đăng nhập</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
                      </Form.Item>
                    </div>

                    <div>
                      <label>Mật khẩu</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
                      </Form.Item>
                    </div>

                    <div>
                      <label>Tên đăng nhập</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div>
                      <label>Tên đăng nhập</label>
                      <Form.Item className="" name="email">
                        <Input />
                        <span></span>
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
                <Button style={{ margin: "5px" }} className="btn-thietbi">
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

export default Addthietbi;
