import { Button, message } from 'antd';
import { FC, ReactElement } from 'react';
const App:FC = ():ReactElement => {
  const _onClick=() => {
    message.success("success")
  }
  return (
    <div>
      <h1>
        <Button type="primary" onClick={_onClick}>登录</Button>
      </h1>
    </div>
  )
}
export default App