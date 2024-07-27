import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ROUTERS } from "./utlis/router";
import MasterLayout from "./Pages/Theme/masterLayout";
import ProfilePage from "./Pages/ProfilePage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
        path: ROUTERS.USER.PROFILE,
        component: <ProfilePage />,
      },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouters.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
