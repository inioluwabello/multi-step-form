import AddOnItemComponent from "./AddOnItemComponent";

const AddOnComponent = ({ userInfo, setUserInfo, addOns }) => {
  
  return (
    <div className="form-wrapper marine-blue">
      <div className="form-title">
        <h2 className="fontFaceUbuntuBold">Pick add-ons</h2>
        <p className="alt-text cool-grey fontFaceUbuntuRegular">
          Add-ons help expand your gaming experience.
        </p>
      </div>

      <div className="form-content">
        {addOns.map((addOn) => {
          return (
            <AddOnItemComponent
              key={addOn.id}
              addOn={addOn}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddOnComponent;
