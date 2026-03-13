import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
