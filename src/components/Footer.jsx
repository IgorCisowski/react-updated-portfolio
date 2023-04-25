import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 32px 20px;
  font-size: 16px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      Igor Cisowski © {new Date().getFullYear()} | all rights reserved
    </StyledFooter>
  );
};
