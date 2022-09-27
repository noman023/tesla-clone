import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        desc={"Order Online for Touchless Delivery"}
        bgImg="model-3.jpg"
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
      />
      <Section
        title="Model Y"
        desc={"Order Online for Touchless Delivery"}
        bgImg="model-y.jpg"
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
      />
      <Section
        title="Model s"
        desc={"Order Online for Touchless Delivery"}
        bgImg="model-s.jpg"
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
      />
      <Section
        title="Model X"
        desc={"Order Online for Touchless Delivery"}
        bgImg="model-x.jpg"
        leftBtnText={"Custom Order"}
        rightBtnText={"Existing Inventory"}
      />
      <Section
        title="Solar Panels"
        desc={"Lowest Cost Solar Panels in America"}
        bgImg="solar-panel.jpg"
        leftBtnText={" Order Now"}
        rightBtnText={"Learn More"}
      />
      <Section
        title="Solar Roof"
        desc={"Produce Clean Energy From Your Roof"}
        bgImg="solar-roof.jpg"
        leftBtnText={" Order Now"}
        rightBtnText={"Learn More"}
      />
      <Section
        title="Accessories"
        bgImg="accessories.jpg"
        leftBtnText={" Shop Now"}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
