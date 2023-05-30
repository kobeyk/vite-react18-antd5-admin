import allRoutes from '@/routes';
import GeneralUtils from "@/utils/general";
import "../index.scss";
const UserSignIn = () => {
  const routesData = GeneralUtils.getFlatRoutes(allRoutes);
  console.log(routesData)
  return (
    <div className="user-session-wrapper">
      <div className="wrapper-container">
        <div className="container-body">
          <div className="session-left-box">session-left-box</div>
          <div className="session-right-form">session-right-form</div>
        </div>
        <div className="container-footer">container-footer</div>
      </div>
    </div>
  );
};

export default UserSignIn;
