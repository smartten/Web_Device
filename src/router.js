import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { ROUTERS } from "./utlis/router";
import MasterLayout from "./Pages/Theme/masterLayout";
import ShopPage from "./Pages/ShopPage";
import AboutUsPage from "Pages/AboutUsPage";
import ContactPage from "Pages/ContactPage";

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
    {
      path: ROUTERS.USER.ABOUT,
      component: <AboutUsPage />,
    },
    {
      path: ROUTERS.USER.CONTACT,
      component: <ContactPage />,
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
