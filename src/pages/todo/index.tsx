import { Outlet } from 'react-router-dom';
const ToDo = () => {
    return (
      <div>
        ToDo
        <hr />
        <Outlet/>
      </div>
    )
  }
  
  export default ToDo;