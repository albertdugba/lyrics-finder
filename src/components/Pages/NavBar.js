import React from "react";
import styled from "styled-components";

import "../../App.css";

const NavBar = () => {
  return (
    <header className="main-header">
      <nav>
        <h3>
          Movie <Logo>DB</Logo>
        </h3>
      </nav>

      <ul className="nav-items">
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>
    </header>
  );
};

const Logo = styled.span`
  color: teal;
  font-weight: bold;
`;

export default NavBar;
