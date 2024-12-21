import { Route, Routes as BrowserRouter, useLocation } from "react-router-dom";
import MainLayout from "../layout";
import { useEffect, useState } from "react";
import HomePage from "../pages/home";

import useWindowDimensions from "../hook/useWindowDimensions";

import PrivacyPolicyPage from "../pages/terms-and-conditions/privacy-policy";
import TermsPage from "../pages/terms-and-conditions/terms-service";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 50);
  }, [pathname]);
  return null;
};

const Routes = () => {
  const location = useLocation();
  const { width } = useWindowDimensions();
  const [menuShow, setMenuShow] = useState(width > 991);
  const onboardingPage = ["/"];
  const hideComponents = onboardingPage.includes(location.pathname)
    ? false
    : true;
  const onOpenMenu = () => {
    setMenuShow(!menuShow);
  };
  return (
    <>
      <ScrollToTop />
      <BrowserRouter>
        <Route
          path="/"
          element={
            <MainLayout
              onOpenMenu={onOpenMenu}
              menuShow={menuShow}
              setMenuShow={setMenuShow}
              hideComponents={hideComponents}
              isLoggedIn={false}
            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-condition" element={<TermsPage />} />
        </Route>
      </BrowserRouter>
    </>
  );
};

export default Routes;
