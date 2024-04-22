import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="">
     <div className="flex justify-center"> <Header></Header></div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
