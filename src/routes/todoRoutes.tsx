import { lazy } from "react";
import NotFound from "@/pages/not-found";
import lazyLoad from "@/components/lazy-load";
import { RouteObject, Navigate } from 'react-router-dom';

const TodoRoutes:RouteObject[] = [
  {
    path: "/todo",
    element: lazyLoad(lazy(() => import("@/pages/todo"))),
    children: [
      {
        path: "",
        element: <Navigate to="/todo/list"/>,
      },
      {
        path: "list",
        element: lazyLoad(lazy(() => import("@/pages/todo/todo-list"))),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
export default TodoRoutes;
