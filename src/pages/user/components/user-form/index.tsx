import CustomIcon from "@/components/custom-icon";
import FormValidRule, { Validator } from "@/utils/rules";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { FC, ReactElement, useEffect, useState } from "react";
import { fetchGet } from "../../../../core/api/fetchGet";
import ThirdPartyLogin from "../third-party-login";
import "./index.scss";

const UserForm: FC = (): ReactElement => {
  /** antd4.x 不再使用createForm包裹组件了，这里直接使用钩子函数 */
  const [form] = Form.useForm();
  const [bLogin, setLogin] = useState<boolean>(true);
  const [title, setTitle] = useState<string>("登录");
  const [checked, setChecked] = useState<boolean>(false);
  const [validUserName, setValidUserName] = useState<Validator[]>();
  const [validPassword, setValidPassword] = useState<Validator[]>();
  const [validConfirmPassword, setValidConfirmPassword] = useState<any>();
  useEffect(() => {
    if (bLogin) {
      setValidUserName(FormValidRule.validUserNameOfLogin);
      setValidPassword(FormValidRule.commonValidate("请输入您的账号密码！"));
    } else {
      setValidUserName(FormValidRule.validUserNameOfRegist);
      setValidPassword(FormValidRule.validateUserPsw);
      setValidConfirmPassword(FormValidRule.validateUserConfirmPsw);
    }
  }, [bLogin]);
  const onCheckRememberMe = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  /** 登录或注册 */
  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    const data = await fetchGet("/user/query");
    console.log(data);
  };

  const switchLogin = (flag: boolean = true) => {
    if (flag) {
      setLogin(true);
      setTitle("登录");
    } else {
      setLogin(false);
      setTitle("注册");
    }
  };

  return (
    <div className="user-form">
      <div className="form-header">
        <span className="form-header-title">{title}</span>
        <span className="form-header-title-tip">
          {bLogin ? "没有账号？" : "已有账号？"}
          {bLogin ? (
            <a onClick={()=>switchLogin(false)}>点此注册</a>
          ) : (
            <a onClick={()=>switchLogin()}>点此登录</a>
          )}
        </span>
      </div>
      <Form
        form={form}
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={validUserName}>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item name="password" rules={validPassword}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            autoComplete="off"
          />
        </Form.Item>
        {bLogin ? null : (
          <Form.Item name="repassword" rules={validConfirmPassword}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="ConfirmPassword"
              autoComplete="off"
            />
          </Form.Item>
        )}
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
            {title}
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
          <ThirdPartyLogin />
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;
