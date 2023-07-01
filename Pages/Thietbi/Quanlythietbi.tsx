import React, { useEffect } from "react";
import { Button, Col, Form, Input, Layout, Menu, Row, Table } from "antd";
import Sider from "antd/es/layout/Sider";
import { HomeOutlined, BellOutlined } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDevices } from "../../redux/reduxDevices";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../redux/rootReducer";

const Quanlythietbi: React.FC = () => {
  interface DeviceData {
    matb: string;
    nametb: string;
    addresstb: string;
    hoatdongtb: string;
    ketnoitb: string;
    dichvutb: string;
    uuid: string;
  }

  const dispatch: ThunkDispatch<RootState, null, AnyAction> = useDispatch();
  const history = useHistory();
  // const [selectedDevice, setSelectedDevice] = useState<DeviceData | null>(null);

  // Lấy dữ liệu thiết bị từ Redux store
  const { data: deviceData } = useSelector((state: RootState) => state.devices);

  useEffect(() => {
    // Gọi action fetchDevices để load dữ liệu từ Firestore
    dispatch(fetchDevices());
  }, [dispatch]);

  const handleViewDetails = (deviceID: string) => {
    const selectedDevice = deviceData.find(
      (device) => device.uuid === deviceID
    );
    if (selectedDevice) {
      console.log("Selected device:", selectedDevice);
      history.push(`/chitiettb/${deviceID}`, { device: selectedDevice });
    } else {
      console.log("Không có dữ liệu thiết bị");
    }
  };

  const handleUpdate = (deviceID: string) => {
    const selectedDevice = deviceData.find(
      (device) => device.uuid === deviceID
    );
    if (selectedDevice) {
      console.log("Selected device:", selectedDevice);
      // setSelectedDevice(selectedDevice);
      history.push(`/capnhattb/${deviceID}`, { device: selectedDevice });
    } else {
      console.log("Không có dữ liệu thiết bị");
    }
  };

  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "matb",
      key: "matb",
      width: 150,
    },
    {
      title: "Tên thiết bị",
      dataIndex: "nametb",
      key: "nametb",
      width: 120,
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "addresstb",
      key: "addresstb",
      width: 100,
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "hoatdongtb",
      key: "hoatdongtb",
      width: 200,
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "ketnoitb",
      key: "ketnoitb",
      width: 200,
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "dichvutb",
      key: "dichvutb",
      width: 150,
    },
    {
      title: "",
      dataIndex: "viewAction",
      key: "viewAction",
      width: 150,
      render: (_text, record) => (
        <>
          <Button onClick={() => handleViewDetails(record.uuid)}>
            Xem chi tiết
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
              <Row>
                <Col span={7} style={{ marginLeft: "-20px", flex: 1 }}>
                  <div className="form-item">
                    <label>Tên đăng nhập</label>
                    <Form.Item name="email">
                      <Input className="form-input" />
                    </Form.Item>
                  </div>
                </Col>
                <Col span={10} style={{ marginLeft: "-20px", flex: 1 }}>
                  <div className="form-thietbi form-item">
                    <label>Tên đăng nhập</label>
                    <Form.Item name="email">
                      <div className="">
                        <Input className="form-input" />
                      </div>
                    </Form.Item>
                  </div>
                </Col>
                <Col span={7} style={{ marginLeft: "-20px", flex: 1 }}>
                  <div className="form-thietbi form-item">
                    <label>Tên đăng nhập</label>
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
                    <Table<DeviceData>
                      columns={columns}
                      dataSource={deviceData}
                      pagination={{
                        pageSize: 5,
                        pageSizeOptions: ["5", "10", "15"],
                      }}
                    />
                  </div>
                </Col>
                <Col
                  style={{ marginTop: "20px" }}
                  className="hang-table icon-thietbi"
                  span={2}
                >
                  <HomeOutlined
                    onClick={() => {
                      window.location.href = "/themtb";
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

export default Quanlythietbi;
