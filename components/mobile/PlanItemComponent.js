const PlanItemComponent = ({ plan, userInfo, setUserInfo }) => {
  return (
    <div
      className={`tab ${
        plan.name === userInfo.plan ? "selected" : ""
      }`}
      onClick={() => setUserInfo({ ...userInfo, plan: plan.name })}
    >
      <div className="fl">
        <div className="tab-icon">
          <img
            src={`/assets/images/icon-${plan.name.toLocaleLowerCase()}.svg`}
            alt=""
          />
        </div>
        <div className="tab-text">
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
