import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { Content } from "antd/es/layout/layout";
import "../StylePages/Login.css";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import { auth, firestore } from "../Firebase/Firebase";
import { useDispatch } from "react-redux";
import { saveUserData } from "../redux/userAction";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [inputError, setInputError] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage("");
    setInputError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrorMessage("");
    setInputError(false);
  };

  const handleSubmit = async (values: any) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      console.log("Login successful");

      // Save user information to Firestore
      const user = { email: values.email, password: values.password };
      const docRef = await addDoc(collection(firestore, "users"), user);
      console.log("User added with ID: ", docRef.id);

      // Save user information to Redux
      dispatch(saveUserData(user));
      console.log("User data stored in Redux:", user);

      // Save user information to localStorage
      localStorage.setItem("userData", JSON.stringify(user));

      history.push("/user");
    } catch (error) {
      console.log("Login failed", error);
      setErrorMessage(
        "Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản và mật khẩu."
      );
      setInputError(true);
    }
  };

  return (
    <Content>
      <Row>
        <Col className="bg1 box" span={10}>
          <div className="mt-5">
            <img src="/asset/img/logoalta.png" alt="" />
          </div>
          <Form className="mt-5" name="login" onFinish={handleSubmit}>
            <div style={{ marginBottom: "16px" }}>
              <label>Tên đăng nhập</label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
                validateStatus={inputError ? "error" : ""}
              >
                <Input
                  className={`login ${inputError ? "error-input" : ""}`}
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Item>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label>Mật khẩu</label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                validateStatus={inputError ? "error" : ""}
                help={inputError ? errorMessage : null}
              >
                <Input.Password
                  className={`login ${inputError ? "error-input" : ""}`}
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Item>
            </div>

            <div style={{ marginTop: "16px" }}>
              <Link className="forgetpass" type="primary" to="/forget">
                Quên mật khẩu?
              </Link>
            </div>

            <div style={{ marginTop: "16px" }}>
              <Button className="buttonlogin" type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="" span={14}>
          <img src="/asset/img/bgh.png" alt="" />
        </Col>
      </Row>
    </Content>
  );
};

export default Login;
