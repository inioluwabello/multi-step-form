import PlanItemComponent from "./PlanItemComponent";
const PlanComponent = ({ userInfo, setUserInfo, plans }) => {
  
  return (
    <div className="form-wrapper marine-blue">
      <div className="form-title">
        <h2 className="fontFaceUbuntuBold">Select your plan</h2>
        <p className="alt-text cool-grey fontFaceUbuntuRegular">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="form-content">
        {plans.map((plan) => {
          return (
            <PlanItemComponent
              key={plan.name}
              plan={plan}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          );
        })}

        <div className="billing alabaster-bg pp8 text-center fontFaceUbuntuMedium">
          <div className="billing-content">
            <div className="billing-tab">Monthly</div>
            <div
              className={`billing-tab switch marine-blue-bg text-left`}
              onClick={() => {setUserInfo({ ...userInfo, billingPeriod: (userInfo.billingPeriod === "mo" ? "yr" : "mo")})}}
            >
              <div className={`switch-knob white-bg ${
                userInfo.billingPeriod === "mo" ? "off" : "on"
              }`}></div>
            </div>
            <div className="billing-tab">Yearly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
