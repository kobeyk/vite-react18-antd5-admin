import { createFromIconfontCN } from "@ant-design/icons";

/** 外网模式(为了方便开发用外网) */
const icon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_4108710_4qayguv5weh.js",
});

/** 内网模式（内网发布，记得将iconfont项目中的图标js文件下载下来） */
// export const icon = createFromIconfontCN({
//   scriptUrl: "@/scripts/iconfont.js",
// });

const navigate = (e: any, url: string = "/") => {
  /** 阻止冒泡 */
  e.stopPropagation();
  window.location.href = url;
};

/** 装饰器包装一下icon组件，内置一个32px字体大小的样式 */
const CustomIcon = (Comp: React.FC<any>) => {
  return (props: any) => (
    <Comp
      onClick={(e: any) => navigate(e, props.url)}
      style={{ fontSize: "32px" }}
      {...props}
      className="custom-icon"
    />
  );
};

export default CustomIcon(icon);
