/* eslint-disable */ 
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Form, Input, message } from 'antd';
import "./Register.scss";
import { getEmail, register } from "../../services/userServices";
import { genToken } from "../../helpers/genToken";

function Register() {

  //Message's Method
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Đăng ký thành công. Vui lòng đăng nhập',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Email đã tồn tại',
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
  const onFinish =  async (data) => {
    const checkEmail = await getEmail(data.email);

    if (checkEmail.length !== 0) {
      error()
    }
    else {
      const token = genToken()
      data.token = token
      if (true) {
        success()
        form.resetFields();
      } 
      const result = await register(data)
      return result
    }
  }
  const [form] = Form.useForm();

  return (
    
    <>
      {contextHolder}
      <div onClick={showModal} className="button--two">
        Register
      </div>

      <Modal
        className="modal"
        title={
          <>
            <div className="modal__image">
              <img src={require("../../assets/quizzie.png")} alt=""/>
            </div>
            <div className="modal__title">Register with Quizzie</div>
          </>
        }
        open={open}        
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          form={form}
        >
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
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
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button className="button--login" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default Register;
