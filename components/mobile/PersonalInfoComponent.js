const PersonalInfo = ({ userInfo, setUserInfo }) => {
    const handleSetName = (e) => {
        setUserInfo({...userInfo, name: e.target.value });
    }
    const handleSetEmail = (e) => {
        setUserInfo({...userInfo, email: e.target.value });
    }
    const handleSetPhone = (e) => {
        setUserInfo({...userInfo, phoneNumber: e.target.value });
    }
  return (
    <div className="form-wrapper marine-blue">
      <div className="form-title">
        <h2 className="fontFaceUbuntuBold">Personal Info</h2>
        <p className="alt-text cool-grey fontFaceUbuntuRegular">Please provide your name, email, address and phone number.</p>
      </div>

      <div className="form-content">
        <label className="fontFaceUbuntuRegular" htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            className="form-control fontFaceUbuntuMedium"
            value={userInfo.name}
            onChange={handleSetName}
            placeholder="e.g. Stephen King"
          />
        </label>
        <label className="fontFaceUbuntuRegular" htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            className="form-control fontFaceUbuntuMedium"
            value={userInfo.email}
            onChange={handleSetEmail}
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label className="fontFaceUbuntuRegular" htmlFor="phone-number">
          Phone Number
          <input
            type="text"
            id="phone-number"
            className="form-control fontFaceUbuntuMedium"
            value={userInfo.phoneNumber}
            onChange={handleSetPhone}
            placeholder="e.g. +1 234 567 890"
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalInfo;
