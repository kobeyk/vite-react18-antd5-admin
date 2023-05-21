import { HashRouter as Router, useRoutes } from "react-router-dom";
import IndexRoutes from "@/routes/indexRoutes";
import TodoRoutes from "@/routes/todoRoutes";

const AllRoutes = () => {
    return useRoutes([
        {
            path: "/*",
            element: <IndexRoutes />
        }, {
            path: "/todo/*",
            element: <TodoRoutes />
        }
    ])
}
const RoutesConfig = () => {
    return (
        <Router>
            <AllRoutes />
        </Router>
    )
}

export default RoutesConfig;