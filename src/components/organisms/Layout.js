import React from "react";
import styled from '@emotion/styled';

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
            <Navbar>
                <MainPageLink href="/">
                    Receptář{" "}
                    <span role="img" aria-label="book">
                        📖
                    </span>
                </MainPageLink>
            </Navbar>
            <div className="container">{children}</div>
        </div>
    );
};

export default Layout;