import Layout from "../components/layout";
import Heading from "../components/heading";
import { useEffect, useState } from "react";
import MobileView from "../components/mobile/MobileView";
import DesktopView from "../components/desktop/DesktopView";

const Index = () => {
  const [pageWidth, setPageWidth] = useState(1200);

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

  const [userInfo, setUserInfo] = useState({
    billingPeriod: "mo",
    plan: "Arcade",
    addOns: [1],
  });
  const [formError, setFormError] = useState({});
  const [page, setPage] = useState(1);

  const plans = [
    {
      name: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      name: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      name: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  ];
  const addOns = [
    {
      id: 1,
      name: "Online service",
      desc: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      name: "Larger storage",
      desc: "Extra 1TB of cloud space",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      name: "Customizable profile",
      desc: "Customize theme on your profile",
      monthlyPrice: 3,
      yearlyPrice: 20,
    },
  ];

  return (
    <>
      <Heading title={"Multi-step Form"} />
      <Layout>
        <div className="centered-content fontFaceUbuntuRegular">
          {isMobile && (
            <MobileView
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              formError={formError}
              setFormError={setFormError}
              page={page}
              setPage={setPage}
              plans={plans}
              addOns={addOns}
              isMobile={isMobile}
            />
          )}
          {!isMobile && (
            <DesktopView
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              formError={formError}
              setFormError={setFormError}
              page={page}
              setPage={setPage}
              plans={plans}
              addOns={addOns}
              isMobile={isMobile}
            />
          )}
        </div>
      </Layout>
    </>
  );
};

export default Index;
