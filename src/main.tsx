import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import zhCN from "antd/locale/zh_CN";
import "@/styles/index.scss"
import App from "./pages/App";

// 通过在 ConfigProvider 中传入 theme，可以配置主题。在升级 v5 后，将默认使用 v5 的主题，以下是将配置主题示例：
ConfigProvider.config({
  theme: {
    primaryColor: "#2F6FFF",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider
    locale={zhCN}
    theme={{
      token: {
        colorPrimary: "orange",
      },
      components: {
        // 修改单个组件的主色而不影响其他的UI组件
        Radio: {
          colorPrimary: "#00b96b",
        },
      },
      // algorithm: theme.darkAlgorithm, // 暗黑算法
      algorithm: theme.defaultAlgorithm, // 默认算法
      // algorithm: theme.compactAlgorithm, // 紧凑算法
    }}
  >
   <App/>
  </ConfigProvider>
);
