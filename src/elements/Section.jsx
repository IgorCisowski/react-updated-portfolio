import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 100px 0;

  @media screen and (min-width: 768px) {
    padding: 160px 0;
  }
`;

export const Section = ({ children, className }) => {
  return <StyledSection className={className}>{children}</StyledSection>;
};
