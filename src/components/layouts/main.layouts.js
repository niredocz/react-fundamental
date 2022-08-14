import React from "react";
import { Container } from "react-bootstrap";
import NavigationLayouts from "./navigation.layouts";

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationLayouts />
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default MainLayouts;
