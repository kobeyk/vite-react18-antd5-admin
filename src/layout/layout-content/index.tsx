import { Outlet } from "react-router-dom"
import { Layout } from "antd"
const {Content} = Layout
const LayoutContent = () => {
  return (
    <Content>
      {/* 渲染子路由 */}
      <Outlet />
    </Content>
  )
}

export default LayoutContent