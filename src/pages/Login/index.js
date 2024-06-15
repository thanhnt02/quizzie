/* eslint-disable */ 
import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { Form, Input } from 'antd';

import "./Login.scss";
import { login } from "../../services/userServices";
import { setCookie } from "../../helpers/cookie";
import { Navigate, useNavigate } from "react-router-dom";
const { Item } = Form;

function Login() {
  const navigate = useNavigate();

  //Message's Method
  const [messageApi, contextHolder] = message.useMessage();
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Email hoặc mật khẩu không đúng',
    });
  };

  // Modal's Method
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  }

  // Form's Method
  const onFinish = async (data) => {
    const isLogin = await login(data.email, data.password);

    if (isLogin.length === 0) {
      error()
    }
    else {
      const token = isLogin[0].token;
      setCookie("token", token, 1);
      navigate("/dashboard");
    }
  };

  return (
    <>
      {contextHolder}
      <div onClick={showModal} className="button--one">
        Login
      </div>

      <Modal
        className="modal"
        title={
          <>
            <div className="modal__image">
              <img src={require("../../assets/quizzie.png")} alt=""/>
            </div>
            <div className="modal__title">Login with Quizzie</div>
          </>
        }
        open={open}
        
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="login"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Item>

          <Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "Password must have more then 6 digits!",
              }
            ]}
          >
            <Input.Password />
          </Item>

          <Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button className="button--login" type="primary" htmlType='submit'>
              Login
            </Button>
          </Item>
        </Form>
      </Modal>
    </>
  );
}

export default Login;