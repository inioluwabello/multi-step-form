const AddOnListComponent = ({ addOn, userInfo }) => {
  return (
    <div key={addOn.id} className="space-between">
      <div className="cool-grey">{addOn.name}</div>
      <div className="">
        +$
        {userInfo.billingPeriod === "mo"
          ? addOn.monthlyPrice
          : addOn.yearlyPrice}
        /{userInfo.billingPeriod}
      </div>
    </div>
  );
};

export default AddOnListComponent;
