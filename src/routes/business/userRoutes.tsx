import LazyLoad from '@/components/router-wrapper/LazyLoad';
import { lazy } from "react";
import { IRouteObject, RouteMeta } from "../renderRouter";
const UserRoutes: IRouteObject[] = [
  {
    path: "/login",
    element: LazyLoad(lazy(() => import("@/pages/user/user-login"))),
    meta: new RouteMeta("用户登录",false),
  },
];

export default UserRoutes;
