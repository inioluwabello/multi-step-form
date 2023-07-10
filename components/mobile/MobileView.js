import PersonalInfo from "./PersonalInfoComponent";

const MobileView = ({ userInfo, setUserInfo }) => {
  return (
    <main role="main" className="mobile">
      <header className="header"></header>
      <div className="p-3 mt--54">
        <div className="main-content-mobile white-bg">
          <PersonalInfo
            userInfo={userInfo}
            setUserInfo={setUserInfo}
          />
        </div>
      </div>
      <footer className="footer white-bg text-right">
        <button className="pry marine-blue-bg white">Next Step</button>
      </footer>
    </main>
  );
};

export default MobileView;
