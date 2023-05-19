import { Layout } from "antd"
import Avatar from "./components/header-avatar"
const {Header} = Layout
/** 头部 */
const LayoutHeader = (props:{className?:string}) => {
  return (
    <Header {...props}>
        <div>
          <Avatar/>
        </div>
    </Header>
  )
}

export default LayoutHeader