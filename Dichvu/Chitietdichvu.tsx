import { BellOutlined } from "@ant-design/icons";
import { Card, Col, Input, Layout, Menu, Row, Table } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";

import React from "react";
import { useLocation } from "react-router-dom";

const { Footer } = Layout;

const Chitietdichvu = () => {
  const location = useLocation();
  const service = location.state?.service;

  console.log(service);
  //colums table
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "madv",
      key: "madv",
      width: 350,
    },
    {
      title: "Trạng thái",
      dataIndex: "namedv",
      key: "namedv",
      width: 400,
    },
  ];

  return (
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
        <Content>
          <Layout style={{ marginTop: "-5px" }} className="center-content">
            <Row>
              <Col span={24}>
                <h1 className="titletopbar">Quản lý dịch vụ</h1>
              </Col>
            </Row>
            <Content>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Card className="">
                    <h1 className="titletopbar">Thông tin dịch vụ</h1>
                    <Row>
                      <Col span={8}>
                        <div>
                          <label className="chu" htmlFor="">
                            Mã dịch vụ:
                          </label>
                        </div>
                        <div>
                          <label className="chu marginchu" htmlFor="">
                            Tên dịch vụ:
                          </label>
                        </div>
                        <div>
                          <label className="chu marginchu" htmlFor="">
                            Mô tả:
                          </label>
                        </div>
                      </Col>
                      <Col span={16}>
                        <div>
                          <label className="" htmlFor="">
                            <span>{service?.madv}</span>
                          </label>
                        </div>
                        <div>
                          <label className=" marginchu" htmlFor="">
                            <span>{service?.namedv}</span>
                          </label>
                        </div>
                        <div>
                          <label className=" marginchu" htmlFor="">
                            <span>{service?.dessdv}</span>
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
                </Col>
                <Col span={15}>
                  <Card className="">
                    <Row>
                      <div className="">
                        <label>Trạng thái</label>
                        <Input
                          style={{
                            width: "150px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          className=""
                        />
                      </div>
                      <div style={{ marginLeft: "20px" }} className="">
                        <label>Chọn thời giạn</label>
                        <Input
                          style={{
                            width: "120px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          className=""
                        />
                      </div>
                      <div style={{ marginLeft: "10px" }} className="">
                        <label></label>
                        <Input
                          style={{
                            width: "120px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          className=""
                        />
                      </div>
                      <div style={{ marginLeft: "30px" }} className="">
                        <label>Từ khóa</label>
                        <Input
                          style={{
                            width: "260px",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          className=""
                        />
                      </div>
                    </Row>
                    <Row style={{ marginTop: "20px" }}>
                      <Table columns={columns} />
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Your Footer Content</Footer>
      </Layout>
    </Layout>
  );
};

export default Chitietdichvu;
