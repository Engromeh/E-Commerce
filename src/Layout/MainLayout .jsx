import BtnHeader from "../Components/Header/BtnHeader";
import TopHeader from "../Components/Header/TopHeader";
import ScorllTop from "../Components/Other_Style/ScorllTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header>
        <TopHeader />
        <BtnHeader />
      </header>

      <ScorllTop />
      <Outlet />
    </>
  );
};

export default MainLayout;
