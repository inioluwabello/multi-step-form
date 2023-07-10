import { useState } from "react";

const PersonalInfoComponent = ({ userInfo, setUserInfo, formError, setFormError }) => {
  const validateName = (name) => {
    const isValid = name && name.length > 3;
    setFormError({
      ...formError,
      nameError: !isValid ? { message: "Invalid name" } : null,
    });
  };
  const handleSetName = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
    validateName(e.target.value);
  };

  const validateEmail = (email) => {
    const isValid = email && isValidEmail(email);
    setFormError({
      ...formError,
      emailError: !isValid ? { message: "Invalid email" } : null,
    });
  };
  const handleSetEmail = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
    validateEmail(e.target.value);
  };

  const validatePhone = (phone) => {
    const isValid = /^\d*$/.test(phone.replaceAll("+", "").replaceAll(" ", ""));
    setFormError({
      ...formError,
      phoneError: !isValid ? { message: "Invalid phone number" } : null,
    });
  };
  const handleSetPhone = (e) => {
    setUserInfo({ ...userInfo, phoneNumber: e.target.value });
    validatePhone(e.target.value);
  };

  return (
    <div className="form-wrapper marine-blue">
      <div className="form-title">
        <h2 className="fontFaceUbuntuBold">Personal Info</h2>
        <p className="alt-text cool-grey fontFaceUbuntuRegular">
          Please provide your name, email, address and phone number.
        </p>
      </div>

      <div className="form-content">
        <label className="fontFaceUbuntuRegular" htmlFor="name">
          <div className="space-between">
            <span>Name</span>
            {formError.nameError && (
              <span className="form-error strawberry-red">
                {formError.nameError.message}
              </span>
            )}
          </div>
          <input
            type="text"
            id="name"
            className={`${
              formError.nameError ? "form-error" : ""
            } form-control fontFaceUbuntuMedium`}
            value={userInfo.name}
            onChange={handleSetName}
            placeholder="e.g. Stephen King"
          />
        </label>
        <label className="fontFaceUbuntuRegular" htmlFor="email">
          <div className="space-between">
            <span>Email</span>
            {formError.emailError && (
              <span className="form-error strawberry-red">
                {formError.emailError.message}
              </span>
            )}
          </div>
          <input
            type="email"
            id="email"
            className={`${
              formError.emailError ? "form-error" : ""
            } form-control fontFaceUbuntuMedium`}
            value={userInfo.email}
            onChange={handleSetEmail}
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label className="fontFaceUbuntuRegular" htmlFor="phone-number">
          <div className="space-between">
            <span>Phone Number</span>
            {formError.phoneError && (
              <span className="form-error strawberry-red">
                {formError.phoneError.message}
              </span>
            )}
          </div>

          <input
            type="text"
            id="phone-number"
            className={`${
              formError.phoneError ? "form-error" : ""
            } form-control fontFaceUbuntuMedium`}
            value={userInfo.phoneNumber}
            onChange={handleSetPhone}
            placeholder="e.g. +1 234 567 890"
          />
        </label>
      </div>
    </div>
  );
};

const isValidEmail = (email) => {
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexPattern.test(email);
  };
export default PersonalInfoComponent;
