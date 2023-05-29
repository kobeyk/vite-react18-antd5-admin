import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import NotFound from "@/pages/not-found";
import lazyLoad from "@/components/lazy-load";
const IndexRoutes:RouteObject[]= [
  {
    path: "",
    element: lazyLoad(lazy(() => import("@/layout"))),
    children: [
      {
        path: "",
        // 重定向子路由home
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: lazyLoad(lazy(() => import("@/pages/home"))),
      },
      {
        path: "usermanage/rolemanage",
        element: lazyLoad(lazy(() => import("@/pages/about"))),
        
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default IndexRoutes;
