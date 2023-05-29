import IndexRoutes from "@/routes/indexRoutes";
import { Router } from "@/routes/renderRouter";
import TodoRoutes from "@/routes/todoRoutes";
import { FC, ReactElement } from "react";
import { HashRouter } from "react-router-dom";
import {App} from "antd"
const AppIndex: FC = (): ReactElement => {
  return (
     /* 很诡异的一个组件，包裹组件 地址：https://ant.design/components/app-cn#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8*/
    <App>
      <HashRouter>
         {/* 渲染路由组件 */}
        <Router routes={[...IndexRoutes,...TodoRoutes]}/>
      </HashRouter>
    </App>
  );
};
export default AppIndex;
