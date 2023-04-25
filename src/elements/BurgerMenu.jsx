import React from "react";
import styled from "styled-components";

const StyledBurgerMenu = styled.div`
  line-height: 0;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Line = styled.span`
  display: block;
  margin: 5px 0;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 10px;
  transition: 0.3s ease-in-out;

  &:nth-child(1) {
    transform: rotate(${({ isOpen }) =>
      isOpen === true ? "-45deg" : ""}) translateY(${({ isOpen }) =>
  isOpen === true ? "11px" : ""});
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : "")};
  }

  &:nth-child(3) {
    transform: rotate(${({ isOpen }) =>
      isOpen === true ? "45deg" : ""}) translateY(${({ isOpen }) =>
  isOpen === true ? "-11px" : ""});
};
  }
`;

export const BurgerMenu = ({ isOpen, handleOpen }) => {
  return (
    <StyledBurgerMenu onClick={() => handleOpen()}>
      {lines.map((line) => (
        <Line key={line} isOpen={isOpen}></Line>
      ))}
    </StyledBurgerMenu>
  );
};

const lines = [1, 2, 3];
