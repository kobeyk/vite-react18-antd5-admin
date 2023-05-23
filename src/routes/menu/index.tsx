import React, { ReactNode } from "react";
import homeIcon from '@/assets/images/menu-icon/home1.svg';
import ImgIcon from "@/components/image-icon";
import {
  UserOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'

interface MenuItem {
  label?: ReactNode;
  key?: React.Key;
  icon?: ReactNode;
  children?: MenuItem[];
  type?: "group";
}
const sliderMenus: MenuItem[] = [
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
  }
];

export default sliderMenus;
