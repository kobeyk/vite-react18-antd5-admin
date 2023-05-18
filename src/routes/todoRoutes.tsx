import { lazy } from "react"
import { useRoutes } from "react-router-dom";
import Todo from "@/pages/todo";
import NotFound from "@/pages/not-found";
import lazyLoad from "@/components/lazy-load";

const TodoRoutes=() => {
    return useRoutes([
        {
            path:"/",
            element:<Todo/>,
            children:[
                {
                    path:"list",
                    index:true,
                    element:lazyLoad(lazy(() => import('@/pages/todo/todo-list'))),
                },
                {
                    path:"*",
                    element:<NotFound/>
                }
            ]
        }
    ])
}
export default TodoRoutes;