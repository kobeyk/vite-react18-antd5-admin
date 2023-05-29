import lazyLoad from "@/components/lazy-load";
import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const UserRoutes:RouteObject[]=[
    {
        path:"signin",
        element:lazyLoad(lazy(() => import("@/pages/user/user-signin")))
    },
    {
        path:"signup",
        element:lazyLoad(lazy(() => import("@/pages/user/user-signup")))
    }
]

export default UserRoutes;