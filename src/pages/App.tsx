import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
const App: FC = (): ReactElement => {
  return (
    <div className="nav">
      App..........
      <hr />
      <Outlet/>
    </div>
  );
};
export default App;
