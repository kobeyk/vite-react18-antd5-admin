import { fetchPost } from "@/core/api/fetchPost";
import GeneralUtils from "@/utils/general";
import { AxiosCanceler } from "@/utils/helper/axiosCanceler";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const _login = () => {
    let authUser = {
      appId: 3,
      userName: "admin",
      password: "Aa123456",
    };
    fetchPost("/auth/login", GeneralUtils.toFormData(authUser)).then((res) => {
      console.log(res);
    });
  };

  const _loginCancel = () => {
    AxiosCanceler.getInstance().removePending({
      url: "/auth/login",
      method: "post",
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
      <Link to="/signin">用户登录</Link>
    </div>
  );
};

export default Home;
