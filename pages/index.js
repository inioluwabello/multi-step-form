import Layout from "../components/layout";
import Heading from "../components/heading";
import { useEffect, useState } from "react";
import MobileView from "../components/mobile/MobileView";
import DesktopView from "../components/desktop/DesktopView";

const Index = () => {
  const [pageWidth, setPageWidth] = useState(770);

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setPageWidth(width);
  };

  setTimeout(() => {
    handleWindowSizeChange();
  }, 500);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = pageWidth <= 770;

  const [userInfo, setUserInfo] = useState({})

  return (
    <>
      <Heading title={"Multi-step Form"} />
      <Layout>
        <div className="centered-content fontFaceUbuntuRegular">
          {isMobile && <MobileView userInfo={userInfo} setUserInfo={setUserInfo} />}
          {!isMobile && <DesktopView />}
        </div>
      </Layout>
    </>
  );
};

export default Index;
