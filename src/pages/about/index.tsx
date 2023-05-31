import { addUser, queryUser, UserModel } from '@/core/service/UserService';
import { uesAppDispatch } from '@/store/hooks';
import { Button } from "antd";
import { useAppSelector } from '../../store/hooks';
const About = () => {
  const dispatch = uesAppDispatch()
  const users = useAppSelector(state=>state.user.users)
  const user:UserModel = {id:123,userName:"123"}
  return (
    <div>
      <h1>About</h1>
      <hr/>
      <Button type="primary" onClick={()=>dispatch(addUser(user))}>添加用户</Button>
      <Button type="primary" onClick={()=>dispatch(queryUser())}>查询用户</Button>
      <hr/>
      <ul>
        {
          users.map((item:UserModel,index)=>{
            return <li key={index}>{item.userName}</li>
          })
        }
      </ul>
    </div>
  )
}

export default About;