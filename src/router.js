import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ROUTERS } from "./utlis/router";
import MasterLayout from "./Pages/Theme/masterLayout";
import ShopPage from "./Pages/ShopPage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
        path: ROUTERS.USER.SHOP,
        component: <ShopPage />,
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
