import CustomIcon from "@/components/custom-icon";
import { Popover } from "antd";
import "./index.scss";
const otherLogin = (
  <div className="login-others">
    <CustomIcon type="icon-aliyun" title="使用阿里云账号登录" />
    <CustomIcon type="icon-logo-gitlab" title="使用GitLab账号登录" />
    <CustomIcon type="icon-ic_login_huawei" title="使用华为账号登录" />
    <CustomIcon type="icon-GitHub" title="使用GitHub账号登录" />
    <CustomIcon type="icon-GitHub" title="使用GitHub账号登录" />
    <CustomIcon type="icon-GitHub" title="使用GitHub账号登录" />
  </div>
);
const ThirdPartyLogin = () => {
  return (
    <div className="login-icon-list">
      <CustomIcon type="icon-aliyun" title="使用阿里云账号登录" url="https://www.baidu.com"/>
      <CustomIcon type="icon-logo-gitlab" title="使用GitLab账号登录" />
      <CustomIcon type="icon-ic_login_huawei" title="使用华为账号登录" />
      <CustomIcon type="icon-GitHub" title="使用GitHub账号登录" />
      <Popover placement="left" content={otherLogin} title="其他登录方式">
        <CustomIcon type="icon-shenglve" />
      </Popover>
    </div>
  );
};

export default ThirdPartyLogin;
