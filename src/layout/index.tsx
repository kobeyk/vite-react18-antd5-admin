import { Layout } from "antd"
import LayoutHeader from "./layout-header"
import LayoutSlider from "./layout-slider"
import './index.scss';

import LayoutContent from "./layout-content"
const WebContainer = () => {
  return (
    <Layout className="layout">
      <LayoutHeader className="header" />
      <Layout className="bottom">
        <LayoutSlider />
        <Layout.Content>
          <LayoutContent />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default WebContainer