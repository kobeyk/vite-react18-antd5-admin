import { AxiosCanceler } from "@/utils/helper/axiosCanceler";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { fetchGet } from '../../core/api/fetchGet';
const Home = () => {
  const _login = () => {
    let authUser = {
      appId: 3,
      userName: "admin",
      password: "Aa123456",
    };
    // fetchPost("/auth/login", GeneralUtils.toFormData(authUser)).then((res) => {
    //   console.log(res);
    // });
    fetchGet("/user/query").then((res)=>{
      console.log(res);
    })
  };

  const _loginCancel = () => {
    AxiosCanceler.getInstance().removePending({
      url: "/user/query",
      method: "get",
    });
  };

  return (
    <div>
      Home
      <hr />
      <Button type="primary" onClick={_login}>
        Sign In
      </Button>
      <Button type="primary" onClick={_loginCancel}>
        Sign In Cancel
      </Button>
      <hr/>
      <Link to="/login">用户登录</Link>
    </div>
  );
};

export default Home;
