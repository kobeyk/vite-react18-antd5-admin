import menuItems from "@/routes/menu/sideMenus";
import { Layout, Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CollapseIcon from "./components/collapse-icon/index";
import "./index.scss";

const { Sider } = Layout;
const LayoutSlider = () => {
  /**获取当前路由的pathname*/
  const { pathname } = useLocation();
  const navigate = useNavigate();
  /** 菜单项，这个需要通过鉴权去动态渲染（后面别忘实现了） */
  const [items,setItems] = useState();
  /**是否折叠菜单*/
  const [bCollapse, setCollapse] = useState<boolean>(false);
  /**当前选中的菜单项 key 数组 */
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const menuOnClick: MenuProps["onClick"] = (e) => {
    /** 菜单点击的keyPath是一个数组，翻转然后连接就是路由地址 */
    const path = e.keyPath.reverse().join("");
    /** 判断下，防止重复跳 */
    if (path !== pathname) {
      /** 同时要记住用户选择的key，reverse函数会改变原数组所以下面不要再翻转了 */
      localStorage.setItem("openKeys", e.keyPath.join("-"));
      navigate(path);
    }
  };

  /** 监听路由地址变化，持久化用户选择的菜单keyPath*/
  useEffect(() => {
    const setActiveMenu = async () => {
      const keys: string[] = pathname
        .split("/")
        .filter(Boolean) // 过滤 “空” 值，如 null、undefined 或空字符串
        .map((item: string) => `/${item}`); //最后再带上/
      setSelectedKeys(keys);
    };
    setActiveMenu();
  }, [pathname]);

  /** 折叠/拉出slider时改变openKeys的值 */
  useEffect(() => {
    /** 从浏览器中取 */
    let openKeys = localStorage.getItem("openKeys");
    if (openKeys) {
      setOpenKeys(openKeys.split("-").filter(Boolean));
    }
    /** 如果折叠，设置空，不然会冒出来 */
    if (bCollapse) {
      setOpenKeys([]);
    }
  }, [bCollapse]);

  /** SubMenu 展开/关闭的回调函数实现 */
  const handleOpenChange = (openKeys: string[]) => {
    if (openKeys.length === 0) {
      return;
    }
    setOpenKeys(openKeys);
    /** 记住用户选择的key，然后转换成字符串 */
    localStorage.setItem("openKeys", openKeys.filter(Boolean).join("-"));
  };

  return (
    <Sider
      trigger={null}
      className="layout-slider"
      //之所以加key,解决刷新的时候菜单项不展开不高亮的BUG，让它进行一个重新的渲染。
      key={`${pathname}+${Math.random()}`} 
      collapsed={bCollapse}
    >
      <Menu
        mode="inline"
        items={menuItems}
        triggerSubMenuAction="click"
        defaultSelectedKeys={["/home"]}
        defaultOpenKeys={openKeys}
        selectedKeys={selectedKeys}
        onClick={menuOnClick}
        onOpenChange={(openKeys: string[]) => handleOpenChange(openKeys)}
      />
      <CollapseIcon bCollapse={bCollapse} setCollapse={setCollapse} />
    </Sider>
  );
};

export default LayoutSlider;
