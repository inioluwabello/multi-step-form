import PreviewComponent from "../Previewcomponent";
import AddOnComponent from "../AddOnComponent";
import PersonalInfoComponent from "../PersonalInfoComponent";
import PlanComponent from "../PlanComponent";
import ThankYouComponent from "../ThankYouComponent";

const DesktopView = ({
  userInfo,
  setUserInfo,
  formError,
  setFormError,
  page,
  setPage,
  plans,
  addOns,
  isMobile,
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
    <main className="desktop-view fl">
      <div className="left-content white">
        <div style={{padding: "0 2em"}}>
          <div className="steps steps-desktop">
            <div className="">
              <div className="step fl">
                <span
                  className={`mr-1 ${page === 1 ? "step-icon magnolia-bg marine-blue" : ""}`}
                >
                  1
                </span>
                <div className="text-sm">
                  <div>STEP 1</div>
                  <div className="fontFaceUbuntuBold">YOUR INFO</div>
                </div>
              </div>
              
              <div className="step mt-3 fl">
                <span
                  className={`mr-1 ${page === 2 ? "step-icon magnolia-bg marine-blue" : ""}`}
                >
                  2
                </span>
                <div className="text-sm">
                  <div>STEP 2</div>
                  <div className="fontFaceUbuntuBold">SELECT PLAN</div>
                </div>
              </div>
              
              <div className="step mt-3 fl">
                <span
                  className={`mr-1 ${page === 3 ? "step-icon magnolia-bg marine-blue" : ""}`}
                >
                  3
                </span>
                <div className="text-sm">
                  <div>STEP 3</div>
                  <div className="fontFaceUbuntuBold">ADD-ONS</div>
                </div>
              </div>
              
              <div className="step mt-3 fl">
                <span
                  className={`mr-1 ${page === 4 ? "step-icon magnolia-bg marine-blue" : ""}`}
                >
                  4
                </span>
                <div className="text-sm">
                  <div>STEP 4</div>
                  <div className="fontFaceUbuntuBold">SUMMRY</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="right-content">
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

        {page === 5 && <ThankYouComponent />}

        <div className="relative w-100">
          <div className="absolute desktop-footer w-100">
            {page < 5 && (
              <footer className="text-right" style={{ marginLeft: "1.5em" }}>
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
              </footer>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesktopView;
