const Layout = ({ children }) => {
  return (
    <>
      <div className="content magnolia-bg">{children}</div>
      <div className="text-center cool-grey">
          Challenge by{" "}
          <a
            className="cool-grey link-hover"
            target="_blank"
            href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a 
            className="cool-grey link-hover"
            target="_blank" href="https://github.com/inioluwabello">
            David Ini
          </a>
          .
        </div>
    </>
  );
};

export default Layout;
