import React, { useState } from "react";
import styled from "styled-components";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "../elements/Logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 8vh;
  box-shadow: 2px 0 10px black;
  background-color: rgb(29, 29, 29);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1268px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    isOpen
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden");
  };

  const handleExit = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <StyledHeader>
      <Container>
        <Logo />
        <MobileNav
          isOpen={isOpen}
          handleOpen={handleOpen}
          handleExit={handleExit}
          setIsOpen={setIsOpen}
        />
        <DesktopNav />
      </Container>
    </StyledHeader>
  );
};
