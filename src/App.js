import React from "react";
import logo from "../src/logo.png";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="social">
            <p>
              <span className="bold"> CHRISASON FIRE PROTECTION</span>
              <br />
              Sorry, we are doing some work on the site
            </p>
          </div>
        </div>
        <div className="content">
          <div className="title-holder"></div>
          <a href="info@chrisasonfire.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <p>
            CHRISASON FIRE PROTECTION LTD Over 260,000hours expirtising in Fire
            Engineering Since 1987 we have been providing Africa with easy
            access to safety technology
            <br />
            <br />
            Email: info@chrisasonfire.com
            <br />
            <br />
            Work: +234 803 335 6183
          </p>
        </div>
      </div>
    );
  };
}

export default App;
