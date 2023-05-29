import IndexRoutes from "@/routes/homeRoutes";
import { Router } from "@/routes/renderRouter";
import TodoRoutes from "@/routes/todoRoutes";
import UserRoutes from "@/routes/userRoutes";
import { App } from "antd";
import { FC, ReactElement } from "react";
import { HashRouter } from "react-router-dom";
const AppIndex: FC = (): ReactElement => {
  return (
     /* 很诡异的一个组件，包裹组件 地址：https://ant.design/components/app-cn#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8*/
    <App>
      <HashRouter>
         {/* 渲染路由组件 */}
        <Router routes={[...IndexRoutes,...TodoRoutes,...UserRoutes]}/>
      </HashRouter>
    </App>
  );
};
export default AppIndex;
