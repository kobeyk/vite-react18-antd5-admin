import withGuard from "@/components/router-guard";
import { lazy } from "react";
import { IRouteObject, RouteMeta } from "../renderRouter";

const UserRoutes: IRouteObject[] = [
  {
    path: "/signin",
    element: withGuard(lazy(() => import("@/pages/user/user-signin"))),
    meta: new RouteMeta("用户登录",false),
  },
  {
    path: "/signup",
    element: withGuard(lazy(() => import("@/pages/user/user-signup"))),
    meta: new RouteMeta("用户注册",false),
  },
];

export default UserRoutes;
