import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: max-content;
  color: white;
  font-size: 23px;
`;

export const Logo = () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faCode} />
    </Container>
  );
};
