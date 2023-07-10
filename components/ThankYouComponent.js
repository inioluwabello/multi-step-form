const ThankYouComponent = () => {
  return (
    <div className="form-final-wrapper text-center">
      <img src="/assets/images/icon-thank-you.svg" alt="thank you" />

      <h2 className="fontFaceUbuntuBold mt-4">Thank you!</h2>
      <p className="alt-text cool-grey fontFaceUbuntuRegular">
        Thanks for confirming you subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a className="cool-grey" href="mailto:belloolakunledavid@gmail.com">
          belloolakunledavid@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default ThankYouComponent;
