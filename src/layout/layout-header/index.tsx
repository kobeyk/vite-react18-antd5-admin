import { Layout } from "antd";
import Avatar from "./components/header-avatar";
import FullScreen from "./components/header-full-screen";
import SwitchI18n from "./components/header-i18n";
import HeaderLogo from "./components/header-logo";
import SwitchDark from "./components/header-switch-dark/index";
import "./index.scss";
const { Header } = Layout;
/** 头部 */
const LayoutHeader = (props: { className?: string }) => {
 
  return (
    <Header {...props}>
      <div className="header-left">
        <HeaderLogo />
      </div>
      <div className="header-right">
        <SwitchI18n/>
        <SwitchDark />
        <FullScreen />
        <Avatar />
      </div>
    </Header>
  );
};

export default LayoutHeader;
