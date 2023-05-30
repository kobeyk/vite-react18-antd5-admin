import HomeRoutes from "@/routes/business/homeRoutes";
import TodoRoutes from "@/routes/business/todoRoutes";
import UserRoutes from "@/routes/business/userRoutes";
const allRoutes = [
    ...HomeRoutes,
    ...TodoRoutes,
    ...UserRoutes
]
/** 聚合所有的业务路由配置对象 */
export default allRoutes;