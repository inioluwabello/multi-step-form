const Layout = ({ children }) => {
  return (
    <>
      <div className="content off-white">{children}</div>
      <div className="text-center" style={{ color: "#ffffff" }}>
          Challenge by{" "}
          <a
            target="_blank"
            href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a target="_blank" href="https://github.com/inioluwabello">
            David Ini
          </a>
          .
        </div>
    </>
  );
};

export default Layout;
