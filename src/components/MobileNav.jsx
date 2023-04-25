import React from "react";
import styled from "styled-components";
import { BurgerMenu } from "../elements/BurgerMenu";
import { MenuLinks } from "../elements/MenuLinks";

const Container = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileNav = ({ isOpen, handleOpen, setIsOpen, handleExit }) => {
  return (
    <Container>
      <BurgerMenu isOpen={isOpen} handleOpen={handleOpen} />
      <MenuLinks
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleExit={handleExit}
      />
    </Container>
  );
};
