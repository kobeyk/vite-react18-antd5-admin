import LazyLoad from "@/components/router-wrapper/LazyLoad";
import NotFound from "@/pages/error/404";
import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { IRouteObject, RouteMeta } from "../renderRouter";

const TodoRoutes: IRouteObject[] = [
  {
    path: "/todo",
    element: LazyLoad(lazy(() => import("@/pages/todo"))),
    meta: { title: "任务管理" },
    children: [
      {
        path: "/todo",
        element: <Navigate to="/todo/list" />,
        meta: new RouteMeta("任务管理"),
      },
      {
        path: "/todo/list",
        element: LazyLoad(lazy(() => import("@/pages/todo/todo-list"))),
        meta: new RouteMeta("任务列表"),
      },
      {
        path: "/todo/*",
        element: <NotFound />,
      },
    ],
  },
];
export default TodoRoutes;
