import React from "react";

import { Card, Col, Layout, Menu, Progress } from "antd";

import "../StylePages/Home.css";
import Sider from "antd/es/layout/Sider";
import { HomeOutlined, BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import "../StylePages/Home.css";

const Home: React.FC = () => {
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
          <Layout>
            <Header className="account bgheader">
              <Col span={15}>
                <h1 className="titletopbar">Dashboard</h1>
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
            <Layout>
              <Content className="">
                <h1 style={{ marginLeft: "70px" }} className="titletopbar">
                  Biểu đồ cấp số
                </h1>
                <div className="card-dashboard-container">
                  <div className="card-dashboard" style={{ marginTop: "10px" }}>
                    <Card>
                      <div>
                        <Progress type="circle" size={60} percent={90} />
                        <div className="card-info">
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Số thứ tự đã cấp</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="card-dashboard" style={{ marginTop: "10px" }}>
                    <Card>
                      <div>
                        <Progress type="circle" size={60} percent={90} />
                        <div className="card-info">
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Số thứ tự đã cấp</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="card-dashboard" style={{ marginTop: "10px" }}>
                    <Card>
                      <div>
                        <Progress type="circle" size={60} percent={90} />
                        <div className="card-info">
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Số thứ tự đã cấp</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="card-dashboard" style={{ marginTop: "10px" }}>
                    <Card>
                      <div>
                        <Progress type="circle" size={60} percent={90} />
                        <div className="card-info">
                          <div>
                            <p>200</p>
                          </div>
                          <div>
                            <p>Số thứ tự đã cấp</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/* Thêm các thẻ card-dashboard khác vào đây */}
                </div>
              </Content>
              <Sider
                className="barbenphai"
                width={401}
                style={{ backgroundColor: "#fff" }}
              >
                <div
                  style={{
                    margin: "30px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="titletopbar"
                >
                  Tổng quan
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Card>
                    <div className="card-content">
                      <Progress type="circle" size={60} percent={90} />
                      <div className="card-info">
                        <div>
                          <p>4.100</p>
                          <p>Thiết bị</p>
                        </div>
                        <div>
                          <p>Đang hoạt động</p>
                          <p>Ngưng hoạt động</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Card className="card-container">
                    <div className="card-content">
                      <Progress type="circle" size={60} percent={90} />
                      <div className="card-info">
                        <div>
                          <p>4.100</p>
                          <p>Thiết bị</p>
                        </div>
                        <div>
                          <p>Đang hoạt động</p>
                          <p>Ngưng hoạt động</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Card className="card-container">
                    <div className="card-content">
                      <Progress type="circle" size={60} percent={90} />
                      <div className="card-info">
                        <div>
                          <p>4.100</p>
                          <p>Thiết bị</p>
                        </div>
                        <div>
                          <p>Đang hoạt động</p>
                          <p>Ngưng hoạt động</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Sider>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
