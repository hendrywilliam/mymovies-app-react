import React from "react";

function Footer({ background, textColor }) {
  return (
    <>
      <footer
        className={`footer footer-center p-4 ${background} text-base-content`}
      >
        <div>
          <p className={textColor}>
            Copyright © 2022 - All right reserved by Donkey Plus - PS: hi mom❤️
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
