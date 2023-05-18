import { lazy } from "react"
import { useRoutes } from "react-router-dom"
import NotFound from "@/pages/not-found"
import lazyLoad from "@/components/lazy-load"

const IndexRoutes = () => {
    return useRoutes([
        {
            path: "",
            element: lazyLoad(lazy(() => import('@/pages/App'))),
            children: [
                {
                    path: "home",
                    element: lazyLoad(lazy(() => import('@/pages/home')))
                },
                {
                    path: "about",
                    element: lazyLoad(lazy(() => import('@/pages/about'))),
                }, {
                    path: "*",
                    element: <NotFound />
                }
            ]

        }
    ])
}
export default IndexRoutes;