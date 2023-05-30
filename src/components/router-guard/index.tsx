import { Spin } from "antd";
import { LazyExoticComponent, ReactNode, Suspense } from "react";
import { useLocation } from "react-router-dom";
/** 对路由组件进行拦截，同时响应了路由懒加载，带Spin动画 */
const withGuard = (Comp: LazyExoticComponent<any>): ReactNode => {
  return (
    <RouterGuard>
      <Suspense
        fallback={
          <Spin
            size="large"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          />
        }
      >
        <Comp />
      </Suspense>
    </RouterGuard>
  );
};

/** 路由守卫函数（验证权限的） */
function RouterGuard({ children }: { children: JSX.Element }) {
  const {pathname} = useLocation(); 
  /** 如果跳转的是登录和注册，放行 */
  if (pathname === "/login") {
    return children;
  }
  return children;
}

export default withGuard;