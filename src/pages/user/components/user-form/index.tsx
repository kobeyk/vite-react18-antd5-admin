import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.scss";
const UserForm = () => {
  const [login, setLogin] = useState<boolean>(true);
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    if (pathname.indexOf("/signin") !== -1) {
      setLogin(true);
    } else if (pathname.indexOf("/signup") !== -1) {
      setLogin(false);
    }
  }, [pathname]);
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="user-form">
      <div className="form-header">
        <span className="form-header-title">{login ? "登录" : "注册"}</span>
        <span className="form-header-title-tip">
         { login ? "已有账号？" : "没有账号？"}
         { login ? <a href="#/signup">点此注册</a> : <a href="#/signin">点此注册</a>}
        </span>
      </div>
      <Form
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
