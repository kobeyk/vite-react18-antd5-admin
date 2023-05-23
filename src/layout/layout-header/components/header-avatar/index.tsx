import { useRef } from "react";
import UserInfoModal, { RefProps } from "./modals/user-info";
import { Avatar, Dropdown} from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import head from "@/assets/images/head.jpg";
import UserPasswordModal from "./modals/user-password";

const AvatarIcon = () => {
  const navigate = useNavigate();
  const infoRef = useRef<RefProps>(null);
  const pwdRef = useRef<RefProps>(null);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>首页</span>,
      onClick: ()=>navigate("/home")
    },
    {
      key: "2",
      label: <span>个人信息</span>,
      onClick: () => {infoRef.current!.showModal({name:'appleyk'})},
    },
    {
      key: "3",
      label: <span>修改密码</span>,
      onClick: () => {pwdRef.current!.showModal('appleyk')},
    },
  ];

  return (
    <>
      <Dropdown
        menu={{ items, selectable: true, defaultSelectedKeys: ["2"] }}
        placement="bottom"
        arrow
        trigger={["click"]}
      >
        <Avatar size="large" src={head}/>
      </Dropdown>
      <UserInfoModal innerRef={infoRef} />
      <UserPasswordModal innerRef={pwdRef}/>
    </>
  );
};

export default AvatarIcon;
