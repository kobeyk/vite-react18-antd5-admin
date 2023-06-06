import LazyLoad from "@/components/router-wrapper/LazyLoad";
import { lazy } from "react";
import { IRouteObject, RouteMeta } from "../renderRouter";

const UserRoutes: IRouteObject[] = [
  {
    path: "/signin",
    element: LazyLoad(lazy(() => import("@/pages/user/user-signin"))),
    meta: new RouteMeta("用户登录",false),
  },
  {
    path: "/signup",
    element: LazyLoad(lazy(() => import("@/pages/user/user-signin"))),
    meta: new RouteMeta("用户注册",false),
  },
];

export default UserRoutes;
