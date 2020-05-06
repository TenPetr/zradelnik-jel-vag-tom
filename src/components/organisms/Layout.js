import React from "react";
import styled from "@emotion/styled";

import "./Layout.css";

const Navbar = styled.div`
  padding: 18px;
  background-color: rgb(29, 29, 29);
  text-align: left;
`;

const MainPageLink = styled.a`
  color: white;
  font-size: 25px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  padding-left: 10px;
`;

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navbar className="navbar">
        <MainPageLink href="/">
          Receptář{" "}
          <span role="img" aria-label="book">
            📖
          </span>
        </MainPageLink>
        <div>
          <a
            role="img"
            aria-label="book"
            className="sidemeals"
            href="/sidemeals"
          >
            Sidemeals
          </a>
          <a role="img" aria-label="book" className="addbutton" href="/add">
            ➕
          </a>
        </div>
      </Navbar>
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
