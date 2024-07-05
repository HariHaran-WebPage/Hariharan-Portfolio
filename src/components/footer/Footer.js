import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Hariharan")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a href="https://github.com/HariHaran-WebPage">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/hariharan-haran-504047306/">
            LinkedIn
          </a>
        </p>
      </div>
    </Fade>
  );
}
