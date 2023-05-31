import LazyLoad from "@/components/router-wrapper/LazyLoad";
import NoPermissions from "@/pages/error/403";
import NotFound from "@/pages/error/404";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { IRouteObject, RouteMeta } from "../renderRouter";

const HomeRoutes: IRouteObject[] = [
  {
    /** 为了后面最路由鉴权判断，这里建议path的/一定要带上，不要交给route v6给我默认带 */
    path: "/",
    element: LazyLoad(lazy(() => import("@/layout"))),
    children: [
      {
        path: "/",
        // 重定向子路由home
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: LazyLoad(lazy(() => import("@/pages/home"))),
        meta: new RouteMeta("主页",false),
      },
      {
        path: "/usermanage",
        element:  <Navigate to="/usermanage/rolemanage" />,
        meta: new RouteMeta("用户管理",false,["admin"]),
      },
      {
        path: "/usermanage/rolemanage",
        element: LazyLoad(lazy(() => import("@/pages/user/user-manage/role-manage"))),
        meta: new RouteMeta("角色管理",false,["admin"],[1]),
      },
      {
        path: "/usermanage/purviewmanage",
        element: LazyLoad(lazy(() => import("@/pages/user/user-manage/purview-manage"))),
        meta: new RouteMeta("权限管理",false,["admin"],[2]),
      },
      {
        path: "/403",
        element: <NoPermissions />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
];

export default HomeRoutes;
