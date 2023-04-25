import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1268px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }
`;

export const Container = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
