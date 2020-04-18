import React from "react";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="navbar">
        <a className="mainPageLink" href="/">
          Receptář{" "}
          <span role="img" aria-label="book">
            📖
          </span>
        </a>
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
