import { Breadcrumb, Layout } from "antd";
import LayoutHeader from "./layout-header";
import LayoutSlider from "./layout-slider";
import "./index.scss";

import LayoutContent from "./layout-content";
const Layouts = () => {
  return (
    <Layout className="layout">
      <LayoutHeader className="header" />
      <Layout className="bottom">
        <LayoutSlider />
        <Layout.Content className="content">
          <div className="content-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="content-container">
            <LayoutContent />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
