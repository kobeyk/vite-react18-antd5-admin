import bill from '@/assets/images/menu-icon/bill.svg';
import homeIcon from '@/assets/images/menu-icon/home1.svg';
import vite from '@/assets/images/menu-icon/vite.svg';
import ImgIcon from "@/components/image-icon";
import i18n from '@/i18n';
import {
  ExclamationCircleOutlined, InfoCircleOutlined, UserOutlined
} from '@ant-design/icons';
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

/**
 * 菜单一定是跟路由有映射关系的，也就是一个惨淡
 */
const sliderMenus: ItemType<MenuItemType>[] = [
  {
    label: i18n.t('sliderMenu.home'),
    key: "/home",
    icon: <ImgIcon icon={homeIcon} />
  },
  {
    label: "用户管理",
    key: "/usermanage",
    icon: <UserOutlined />,
    children: [
      {
        label: "角色管理",
        key: "/rolemanage",
        icon: <ExclamationCircleOutlined />,
      },
      { type: "divider" },
      {
        label: "权限管理",
        key: "/purviewmanage",
        icon: <InfoCircleOutlined />,
      }
    ]
  },
  {
    label: "数据管理",
    key: "/data",
    icon: <ImgIcon icon={bill} />,
    children:[
      {
        label: "字段管理",
        key: "/filedmanage",
        icon: <ImgIcon icon={vite} />,
      },
      {
        label: "模板管理",
        key: "/templatemanage",
        icon: <ImgIcon icon={vite} />,
      }
    ]
  },
];

i18n.on('languageChanged', () => {
  window.location.reload()
});

export default sliderMenus;
