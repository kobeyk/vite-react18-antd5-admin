import bill from '@/assets/images/menu-icon/bill.svg';
import homeIcon from '@/assets/images/menu-icon/home1.svg';
import vite from '@/assets/images/menu-icon/vite.svg';
import ImgIcon from "@/components/image-icon";
import i18n from '@/i18n';
import LocaleHelper from '@/utils/helper/localeHelper';
import {
  ExclamationCircleOutlined, InfoCircleOutlined, UserOutlined
} from '@ant-design/icons';
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

/**
 * 菜单一定是跟路由有映射关系的，也就是一个惨淡
 */
const sideMenus: ItemType<MenuItemType>[] = [
  {
    label: i18n.t(LocaleHelper.getMenuHome()),
    key: "/home",
    icon: <ImgIcon icon={homeIcon} />
  },
  {
    label: i18n.t(LocaleHelper.getMenuUserMG()),
    key: "/usermanage",
    icon: <UserOutlined />,
    children: [
      {
        label: i18n.t(LocaleHelper.getMenuRoleMG()),
        key: "/rolemanage",
        icon: <ExclamationCircleOutlined />,
      },
      { type: "divider" },
      {
        label: i18n.t(LocaleHelper.getMenuPurviewMG()),
        key: "/purviewmanage",
        icon: <InfoCircleOutlined />,
      }
    ]
  },
  {
    label: i18n.t(LocaleHelper.getMenuDataMG()),
    key: "/data",
    icon: <ImgIcon icon={bill} />,
    children: [
      {
        label: i18n.t(LocaleHelper.getMenuFieldMG()),
        key: "/filedmanage",
        icon: <ImgIcon icon={vite} />,
      },
      {
        label: i18n.t(LocaleHelper.getMenuTemplateMG()),
        key: "/templatemanage",
        icon: <ImgIcon icon={vite} />,
      }
    ]
  },
];

i18n.on('languageChanged', () => {
  window.location.reload()
});

export default sideMenus;
