import { useRef } from "react";
import UserInfoModal, { RefProps } from "@/components/modals/user-info";
import { Avatar, Dropdown, message } from "antd";
import type { MenuProps } from "antd";
const AvatarIcon = () => {
  const infoRef = useRef<RefProps>(null);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>首页</span>,
      onClick: () => {
        message.success("跳转到首页");
      },
    },
    {
      key: "2",
      label: <span>个人信息</span>,
      onClick: () => {
        message.success("跳转到首页");
      },
    },
  ];

  return (
    <>
      <Dropdown
        menu={{ items, selectable: true, defaultSelectedKeys: ["3"] }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <Avatar size="large" />
      </Dropdown>
      <UserInfoModal innerRef={infoRef} />
    </>
  );
};

export default AvatarIcon;
