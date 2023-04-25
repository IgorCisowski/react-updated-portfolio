import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 29, 29, 0.2);
  font-size: 16px;
  min-height: 338px;

  p {
    padding: 0 10px;
  }

  @media screen and (min-width: 728px) {
    font-size: 18px;
  }
`;
const Check = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border: 4px solid #791818b6;
  border-radius: 50%;
  width: 8vh;
  height: 8vh;

  @media screen and (min-width: 728px) {
    font-size: 56px;
  }
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;

  @media screen and (min-width: 728px) {
    font-size: 32px;
  }
`;

export const SubmitMessage = () => {
  return (
    <StyledMessage id="my-form-status">
      <Check>
        <FontAwesomeIcon icon={faCheck} />
      </Check>
      <H1>Thank you</H1>
      <p>Thanks for reaching out. I will get back to you soon.</p>
    </StyledMessage>
  );
};
