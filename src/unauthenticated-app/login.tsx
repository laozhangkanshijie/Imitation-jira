import { FormEvent } from "react";
import { useAuth } from "context/auth-constext";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";

const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const { login } = useAuth();

  const handleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={"submit"} type={"primary"}>
          {" "}
          登陆
        </LongButton>
      </Form.Item>
    </Form>
  );
};
