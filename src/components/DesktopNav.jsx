import React from "react";
import styled from "styled-components";
import { MenuLinks } from "../elements/MenuLinks";

const Container = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const DesktopNav = () => {
  return (
    <Container>
      <MenuLinks />
    </Container>
  );
};
