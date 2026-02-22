import { Outlet } from "react-router-dom";
import Header from "./Header";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FeatureSection />
      <Footer />
    </>
  );
};

export default Layout;
