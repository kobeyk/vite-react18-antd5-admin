import homeIcon from '@/assets/images/menu-icon/home1.svg';
import vite from '@/assets/images/menu-icon/vite.svg'; 
import bill from '@/assets/images/menu-icon/bill.svg'; 
import ImgIcon from "@/components/image-icon";
import {
  UserOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";

const sliderMenus: ItemType<MenuItemType>[] = [
  {
    label: "首页",
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

export default sliderMenus;
