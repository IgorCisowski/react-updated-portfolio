import styled from "styled-components";
const StyledHeading = styled.h3`
  font-size: 18px;
  margin: 0 0 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65em;
  }
`;

const Dash = styled.span`
  display: inline-block;
  color: #791818;
`;

export const Heading = ({ children }) => {
  return (
    <StyledHeading>
      <Dash>/</Dash> {children}
    </StyledHeading>
  );
};
