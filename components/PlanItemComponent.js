const PlanItemComponent = ({ plan, userInfo, setUserInfo, isMobile }) => {
  return (
    <div
      className={`tab 
      ${plan.name === userInfo.plan ? "selected " : ""} 
      ${
        isMobile === false ? "tab-desktop " : ""
      }`}
      onClick={() => setUserInfo({ ...userInfo, plan: plan.name })}
    >
      <div className={`${isMobile === true ? "fl" : ""}`}>
        <div className="tab-icon">
          <img
            src={`/assets/images/icon-${plan.name.toLocaleLowerCase()}.svg`}
            alt=""
          />
        </div>
        <div className={`tab-text ${isMobile === false ? "mt-3" : ""}`}>
          <div className="fontFaceUbuntuBold">{plan.name}</div>
          <div className="text-md cool-grey">
            $
            {userInfo.billingPeriod === "mo"
              ? plan.monthlyPrice
              : plan.yearlyPrice}
            /{userInfo.billingPeriod}
          </div>
          {userInfo.billingPeriod === "yr" && (
            <div className="text-sm">2 months free</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanItemComponent;
