import { Switch } from "antd";
import { useState } from "react";

const SwitchDark = () => {
  const [theme, changeTheme] = useState<boolean>(false);
  const onChange = (checked: boolean) => {
    /** 使用css的filter来调节系统主题 */
    /** 首先获取整个站点的html dom */
    const body = document.documentElement as HTMLElement;
    if (checked) {
      /** 色弱模式 */
      body.setAttribute("style", "filter:invert(80%);");
      /** 灰度模式（就是哀悼的那种） */
    //   body.setAttribute("style", "filter:grayscale();");
    } else {
      body.removeAttribute("style");
    }
    changeTheme(checked);
  };
  return (
    // 通过antd的开关UI组件，配合CSS将整个页面的亮度调低
    <Switch
      className="dark"
      defaultChecked={theme}
      checkedChildren={<>🌞</>}
      unCheckedChildren={<>🌜</>}
      onChange={onChange}
    />
  );
};

export default SwitchDark;
