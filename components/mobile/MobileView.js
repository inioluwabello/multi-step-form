import PersonalInfo from "./PersonalInfoComponent";

const MobileView = ({
  userInfo,
  setUserInfo,
  formError,
  setFormError,
  page,
  setPage,
}) => {
  const goToPage = (pageNumber) => {
    if (page1Valid() === true) {
      setPage(pageNumber);
    }
  };
  const page1Valid = () => {
    let error = false;
    if (!userInfo.name || userInfo.name === "") {
      setFormError({
        ...formError,
        nameError: { message: "This field is required" },
      });
      error = true;
    }

    if (!userInfo.email || userInfo.email === "") {
      setFormError({
        ...formError,
        emailError: { message: "This field is required" },
      });
      error = true;
    }

    if (!userInfo.phoneNumber || userInfo.phoneNumber === "") {
      setFormError({
        ...formError,
        phoneError: { message: "This field is required" },
      });
      error = true;
    }
    if (
      (formError.nameError || formError.emailError || formError.phoneError) &&
      error === false
    ) {
      window.alert("There are still some errors on the page");
      error = true;
    }
    return !error;
  };
  return (
    <main role="main" className="mobile">
      <header className="header">
        <div className="steps fontFaceUbuntuMedium">
          <div className="space-between">
            <span className={`${page === 1 ? "magnolia-bg marine-blue" : ""}`}>
              1
            </span>
            <span className={`${page === 2 ? "magnolia-bg marine-blue" : ""}`}>
              2
            </span>
            <span className={`${page === 3 ? "magnolia-bg marine-blue" : ""}`}>
              3
            </span>
            <span className={`${page === 4 ? "magnolia-bg marine-blue" : ""}`}>
              4
            </span>
          </div>
        </div>
      </header>
      <div className="p-3 mt--54">
        <div className="main-content-mobile white-bg">
          {page === 1 && (
            <PersonalInfo
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              formError={formError}
              setFormError={setFormError}
              page={page}
              setPage={setPage}
            />
          )}
        </div>
      </div>
      <footer className="footer white-bg text-right">
        <div className="space-between">
          {page > 1 && <button
            className="pry white-bg cool-grey"
            onClick={() => goToPage(page - 1)}
          >
            Go Back
          </button> }
          <button
            className="pry marine-blue-bg white"
            onClick={() => goToPage(page + 1)}
          >
            Next Step
          </button>
        </div>
      </footer>
    </main>
  );
};

export default MobileView;
