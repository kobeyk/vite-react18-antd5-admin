import { Layout, MenuProps } from "antd"
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from "antd"
import menuItems from '@/routes/menu';
import './index.scss'
import CollapseIcon from './components/collapse-icon/index';
import { useEffect, useState } from "react";

const { Sider } = Layout
const LayoutSlider = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()
  const [bCollapse, setCollapse] = useState<boolean>(false)
  const menuOnClick: MenuProps['onClick'] = (e) => {
    const path = e.keyPath.reverse().join("")
    console.log(path)
    navigate(path)
  }
  useEffect(() => {
    /** 监听路由地址变化 */
  }, [pathname])

  console.log('render')
  return (
    // 之所以加key,解决刷新的时候颜色选择中的菜单不高亮的问题，让它进行一个重新的渲染。
    <Sider
      trigger={null}
      className="layout-slider"
      key={`${pathname}+${Math.random()}`}
      collapsed={bCollapse}
    >
      <Menu mode="inline"
        items={menuItems}
        triggerSubMenuAction="click"
        defaultSelectedKeys={['/usermanage', '/rolemanage']}
        defaultOpenKeys={['/usermanage', '/rolemanage']}
        onClick={menuOnClick}
      />
      <CollapseIcon bCollapse={bCollapse} setCollapse={setCollapse} />
    </Sider>
  )
}

export default LayoutSlider