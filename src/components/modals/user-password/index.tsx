import { App, Modal } from "antd";
import { Ref, useImperativeHandle, useState } from "react";
import { RefProps } from "../user-info";

/** 用户修改密码模态框 */
const UserPasswordModal = (props: { innerRef: Ref<RefProps> | undefined }) => {
  const { innerRef } = props;
  const { message } = App.useApp();
  const [userName, setUserName] = useState<string>();
  const [visible, setVisible] = useState(false);
  useImperativeHandle(innerRef, () => ({
    showModal,
  }));
  const showModal = (userName: string) => {
    setVisible(true);
    setUserName(userName);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleOk = () => {
    message.success(`${userName}修改个人密码成功 🎉🎉🎉`);
    setVisible(false);
  };

  return (
    <>
      <Modal
        open={visible}
        title="修改密码"
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default UserPasswordModal;
