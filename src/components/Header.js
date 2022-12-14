import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const products = useSelector(selectProducts);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        {products &&
          products.map((product, index) => (
            <a key={index} href="#">
              {product}
            </a>
          ))}
      </Menu>

      <RightMenu>
        <p>
          <a href="#">Shop</a>
        </p>
        <p>
          <a href="#">Account</a>
        </p>
        <p>
          <a href="#" onClick={() => setBurgerStatus(true)}>
            Menu
          </a>
        </p>
      </RightMenu>

      <BurgerNav status={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
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

  a {
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
  transform: ${(props) =>
    props.status ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.4s;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li {
    padding: 10px 0px;
    padding-left: 20px;
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  margin-right: 20px;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end; ;
`;
