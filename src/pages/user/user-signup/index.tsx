import UserFooter from "../components/user-footer";
import UserForm from "../components/user-form";
import "../index.scss";
const UserSignUp = () => {
  return (
    <div className="user-session-wrapper">
      <div className="wrapper-container">
        <div className="container-body">
          <div className="session-left-box">session-left-box</div>
          <div className="session-right-form">
            <UserForm title="注册" bLogin={false}/>
          </div>
        </div>
        <div className="container-footer">
          <UserFooter/>
        </div>
      </div>
    </div>
  )
}

export default UserSignUp;