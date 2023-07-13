import allRoutes from '@/routes';
import "@/styles/common.scss";
import GeneralUtils from "@/utils/general";
import UserFooter from '../components/user-footer';
import UserForm from '../components/user-form';
import "../index.scss";
const UserSignIn = () => {
  const routesData = GeneralUtils.getFlatRoutes(allRoutes);
  console.log(1111,routesData)
  return (
    <div className="user-session-wrapper">
      <div className="wrapper-container">
        <div className="container-body">
          <div className="session-left-box">session-left-box</div>
          <div className="session-right-form">
            <UserForm/>
          </div>
        </div>
        <div className="container-footer">
          <UserFooter/>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;