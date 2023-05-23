import { Layout } from "antd"
import Avatar from "./components/header-avatar"
import HeaderLogo from "./components/header-logo"
import "./index.scss"
import SwitchDark from './components/header-switch-dark/index';
import FullScreen from "./components/header-full-screen";
const {Header} = Layout
/** 头部 */
const LayoutHeader = (props:{className?:string}) => {
  return (
    <Header {...props}>
      <div className="header-left">
        <HeaderLogo/>
      </div>
        <div className="header-right">
          <SwitchDark/>
          <FullScreen/>
          <Avatar/>
        </div>
    </Header>
  )
}

export default LayoutHeader