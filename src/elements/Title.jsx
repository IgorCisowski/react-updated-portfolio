import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 24px;
  margin: 0 0 20px;
  font-weight: 700;
  line-height: 1.2em;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1.2em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 52px;
  }
`;

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
