import PreviewComponent from "../Previewcomponent";
import AddOnComponent from "../AddOnComponent";
import PersonalInfoComponent from "../PersonalInfoComponent";
import PlanComponent from "../PlanComponent";
import ThankYouComponent from "../ThankYouComponent";

const MobileView = ({
  userInfo,
  setUserInfo,
  formError,
  setFormError,
  page,
  setPage,
  plans,
  addOns,
  isMobile
}) => {
  const goToPage = (pageNumber) => {
    if (page === 1 && page1hasErrors() === true) return;

    setPage(pageNumber);
  };
  const page1hasErrors = () => {
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
    return error;
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
            <span className={`${page === 4 || page === 5 ? "magnolia-bg marine-blue" : ""}`}>
              4
            </span>
          </div>
        </div>
      </header>
      <div className="p-3 mt--54">
        <div className="main-content-mobile white-bg">
          {page === 1 && (
            <PersonalInfoComponent
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              formError={formError}
              setFormError={setFormError}
            />
          )}

          {page === 2 && (
            <PlanComponent
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              plans={plans}
              isMobile={isMobile}
            />
          )}

          {page === 3 && (
            <AddOnComponent
              addOns={addOns}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}

          {page === 4 && (
            <PreviewComponent
              addOns={addOns}
              plans={plans}
              userInfo={userInfo}
              setPage={setPage}
            />
          )}

          {page === 5 && (<ThankYouComponent />)}
        </div>
      </div>
      
      {page < 5 && <footer className="footer white-bg text-right">
        <div className="space-between">
          <div>
            {page > 1 && (
              <button
                className="pry white-bg cool-grey"
                onClick={() => goToPage(page - 1)}
              >
                Go Back
              </button>
            )}
          </div>
          {page < 4 && (
            <div>
              <button
                className="pry btn-hover marine-blue-bg white"
                onClick={() => goToPage(page + 1)}
              >
                Next Step
              </button>
            </div>
          )}
          {page === 4 && (
            <div>
              <button
                className="pry btn-hover purplish-blue-bg white"
                onClick={() => goToPage(page + 1)}
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </footer>}
    </main>
  );
};

export default MobileView;
