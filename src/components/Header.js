import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model x</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
        <p>
          <a href="#">Solar Roof</a>
        </p>
        <p>
          <a href="#">Solar Panels</a>
        </p>
      </Menu>
      <RightMenu>
        <p>
          <a href="#">Shop</a>
        </p>
        <p>
          <a href="#">Account</a>
        </p>
        <p>
          <a href="#">Menu</a>
        </p>
      </RightMenu>
      <BurgerNav>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Insurance</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
        </li>
        <li>
          <a href="#">United States</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
    padding: 0px 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 600;
    padding: 0px 15px;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
`;
