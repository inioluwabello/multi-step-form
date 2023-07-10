import CheckBox from "./CheckBox";

const AddOnItemComponent = ({ addOn, userInfo, setUserInfo }) => {
  const toggleAddOn = (id) => {
    const index = userInfo.addOns.indexOf(id);
    if (index === -1)
      setUserInfo({ ...userInfo, addOns: [...userInfo.addOns, id] });
    else
      setUserInfo({
        ...userInfo,
        addOns: userInfo.addOns.filter((_, i) => i !== index),
      });
  };
  return (
    <div
      className={`tab ${
        userInfo.addOns.indexOf(addOn.id) !== -1 ? "selected" : ""
      }`}
      onClick={() => toggleAddOn(addOn.id)}
    >
      <div className="space-between">
        <div className="fl tab-text">
          <div className="tab-icon">
            <CheckBox
              checked={userInfo.addOns.indexOf(addOn.id) !== -1}
            />
          </div>
          <div>
            <div className="fontFaceUbuntuBold">{addOn.name}</div>
            <div className="text-md cool-grey">{addOn.desc}</div>
          </div>
        </div>
        <div className="tab-text purplish-blue">
          +$
          {userInfo.billingPeriod === "mo"
            ? addOn.monthlyPrice
            : addOn.yearlyPrice}
          /{userInfo.billingPeriod}
        </div>
      </div>
    </div>
  );
};

export default AddOnItemComponent;
