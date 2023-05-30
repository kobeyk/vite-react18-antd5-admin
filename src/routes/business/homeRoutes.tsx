import NotFound from "@/pages/not-found";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import withGuard from "../../components/router-guard/index";
import { IRouteObject, RouteMeta } from "../renderRouter";

const HomeRoutes: IRouteObject[] = [
  {
    /** 为了后面最路由鉴权判断，这里建议path的/一定要带上，不要交给route v6给我默认带 */
    path: "/",
    element: withGuard(lazy(() => import("@/layout"))),
    children: [
      {
        path: "/",
        // 重定向子路由home
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: withGuard(lazy(() => import("@/pages/home"))),
        meta: new RouteMeta("主页"),
      },
      {
        path: "/usermanage",
        element:  <Navigate to="/usermanage/rolemanage" />,
        meta: new RouteMeta("用户管理",true,["admin"]),
      },
      {
        path: "/usermanage/rolemanage",
        element: withGuard(lazy(() => import("@/pages/user/user-manage/role-manage"))),
        meta: new RouteMeta("角色管理",true,["admin"],[1]),
      },
      {
        path: "/usermanage/purviewmanage",
        element: withGuard(lazy(() => import("@/pages/user/user-manage/purview-manage"))),
        meta: new RouteMeta("权限管理",true,["admin"],[2]),
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
];

export default HomeRoutes;
