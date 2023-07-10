import AddOnListComponent from "./AddOnListComponent";

const PreviewComponent = ({ userInfo, plans, addOns, setPage }) => {
  const getPlanPrice = (planName) => {
    const plan = plans.find((o) => o.name === planName);
    return userInfo.billingPeriod === "mo"
      ? plan.monthlyPrice
      : plan.yearlyPrice;
  };
  const getTotalPrice = () => {
    let total = getPlanPrice(userInfo.plan);
    userInfo.addOns.map((addOnId) => {
      const addOn = addOns.find((o) => o.id === addOnId);
      total +=
        userInfo.billingPeriod === "mo"
          ? addOn.monthlyPrice
          : addOn.yearlyPrice;
    });
    return total;
  };
  return (
    <div className="form-wrapper marine-blue">
      <div className="form-title">
        <h2 className="fontFaceUbuntuBold">Finishing up</h2>
        <p className="alt-text cool-grey fontFaceUbuntuRegular">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="form-content">
        <div className="alabaster-bg">
          <div className="space-between">
            <div className="plan fontFaceUbuntuBold">
              {userInfo.plan} (
              {userInfo.billingPeriod === "mo" ? "Monthly" : "Yearly"})
              <div className="fontFaceUbuntuRegular cool-grey">
                <a className="link-text" onClick={() => setPage(2)}>
                  Change
                </a>
              </div>
            </div>
            <div className="price fontFaceUbuntuBold">
              ${getPlanPrice(userInfo.plan)}/{userInfo.billingPeriod}
            </div>
          </div>

          <div className="add-ons">
            {userInfo.addOns.map((addOnId) => {
              return (
                <AddOnListComponent
                  addOn={addOns.find((o) => o.id === addOnId)}
                  addOns={addOns}
                  userInfo={userInfo}
                />
              );
            })}
          </div>
        </div>

        <div className="space-between">
          <div className="cool-grey" style={{alignSelf: "center"}}>
            Total (per {userInfo.billingPeriod === "mo" ? "month" : "year"})
          </div>
          <div className="purplish-blue text-lg fontFaceUbuntuBold">
            ${getTotalPrice()}/{userInfo.billingPeriod}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewComponent;
