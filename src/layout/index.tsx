import { Layout } from "antd";
import LayoutHeader from "./layout-header";
import LayoutSlider from "./layout-slider";
import "./index.scss";

import LayoutContent from "./layout-content";
import BreadCrumb from "@/components/breadcrumb";
const Layouts = () => {
  return (
    <Layout className="layout">
      <LayoutHeader className="header" />
      <Layout className="bottom">
        <LayoutSlider />
        <Layout.Content className="content">
          <div className="content-breadcrumb">
            <BreadCrumb/>
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
