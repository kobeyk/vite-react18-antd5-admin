import { lazy } from "react"
import { useRoutes } from "react-router-dom";
import NotFound from "@/pages/not-found";
import lazyLoad from "@/components/lazy-load";


const TodoRoutes = () => {
    return useRoutes([
        {
            path: "",
            element: lazyLoad(lazy(() => import('@/pages/todo'))),
            children: [
                {
                    path: "",
                    element: lazyLoad(lazy(() => import('@/pages/todo/todo-list'))),
                },
                {
                    path: "list",
                    element: lazyLoad(lazy(() => import('@/pages/todo/todo-list'))),
                },
                {
                    path: "*",
                    element: <NotFound />
                }
            ]
        }
    ])
}
export default TodoRoutes;