import CustomIcon from "@/components/custom-icon";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ThirdPartyLogin from "../third-party-login";
import "./index.scss";
const UserForm = () => {
  const [login, setLogin] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(false);
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    if (pathname.indexOf("/signin") !== -1) {
      setLogin(true);
    } else if (pathname.indexOf("/signup") !== -1) {
      setLogin(false);
    }
  }, [pathname]);
  const onCheckRememberMe = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <div className="user-form">
      <div className="form-header">
        <span className="form-header-title">{login ? "登录" : "注册"}</span>
        <span className="form-header-title-tip">
          {login ? "没有账号？" : "已有账号？"}
          {login ? (
            <a href="#/signup">点此注册</a>
          ) : (
            <a href="#/signin">点此注册</a>
          )}
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
          <Form.Item name="remember" noStyle>
            <div className="remember-checked">
              <Checkbox
                checked={checked}
                defaultChecked={checked}
                onChange={onCheckRememberMe}
              >
                记住我
              </Checkbox>
              <span>
                <a href="">短信验证登录</a>
              </span>
            </div>
          </Form.Item>
        </Form.Item>

        <Form.Item style={{ marginBottom: "0px" }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
        <Form.Item className="login-form-forgot">
          <a href="">已有账号, 忘记密码？</a>
        </Form.Item>
        <Form.Item>
          <div className="use-oschina-login">
            <CustomIcon type="icon-icon-oschina-circle" />
            <span>使用 OSChina 账号登录</span>
          </div>
        </Form.Item>
        <Form.Item className="other-login-mode">
          <h4>其他登录方式</h4>
        </Form.Item>
        <Form.Item>
          <ThirdPartyLogin/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
