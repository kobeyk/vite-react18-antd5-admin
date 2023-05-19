import { message, Modal } from "antd";
import { Ref, useImperativeHandle, useState } from "react";

export interface RefProps {
  showModal: (params: any) => void | undefined;
}

/** 用户个人信息查看模态框 */
const UserInfoModal = (props: { innerRef: Ref<RefProps> }) => {
  const [visible, setVisible] = useState(false);
  /**
   * 通过useImperativeHandle的Hook, 
   * 将父组件传入的ref和useImperativeHandle第二个参数返回的对象绑定到了一起
   * 所以在父组件中, 调用inputRef.current时, 实际上是返回的对象
   * useImperativeHandle使用简单总结:
   * 作用: 减少暴露给父组件获取的DOM元素属性, 只暴露给父组件需要用到的DOM方法
   * 参数1: 父组件传递的ref属性
   * 参数2: 返回一个对象, 以供给父组件中通过ref.current调用该对象中的方法
   */
  useImperativeHandle(props.innerRef, () => ({
    showModal,
  }));

  const handleOk = () => {
    setVisible(false)
    message.success('修改密码成功 🎉🎉🎉')
  }

  const handleCancel = () => {
    setVisible(false)
  }

  const showModal = (params: { name: number }) => {
    console.log(params);
    setVisible(true);
  };

  return (
    <Modal
      title="修改密码"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <p>Some Password...</p>
      <p>Some Password...</p>
      <p>Some Password...</p>
    </Modal>
  );
};

export default UserInfoModal;
