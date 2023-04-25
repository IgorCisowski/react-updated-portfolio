import React from "react";
import styled from "styled-components";
import Igor from "../images/igor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Introduction } from "./Introduction";
import { Section } from "../elements/Section";
import { Container } from "../elements/Container";

const StyledSection = styled(Section)`
  background-color: rgba(60, 60, 60, 0.2);
  background-image: radial-gradient(
    50% 50% at 75% 10%,
    #3f2323,
    transparent 400px
  );
  height: 92vh;
  padding: 60px 0 180px;

  @media screen and (min-width: 768px) {
    background-image: radial-gradient(
      farthest-corner at top right,
      #3f2323,
      transparent 800px
    );
    padding: 0;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1048px) {
    background-image: radial-gradient(
      farthest-corner at top right,
      #3f2323,
      transparent 1100px
    );
  }

  @media screen and (min-width: 1400px) {
    background-image: radial-gradient(
      farthest-corner at top right,
      #3f2323,
      transparent 1400px
    );
  }

  @media screen and (min-width: 1600px) {
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  justify-items: center;
  grid-row-gap: 40px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 768px) {
    grid-row-gap: 0px;
    grid-column-gap: 30px;
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: auto;
    align-items: center;
  }
`;

const ImgContainer = styled.div`
  width: 32vh;
  height: 32vh;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    justify-self: end;
    grid-area: 1/2/2/3;
    max-width: 82%;
    width: 100%;
    height: 97%;
  }

  @media screen and (min-width: 1600px) {
    max-width: 87%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const LearnMore = styled.a`
  svg {
    color: white;
    font-size: 30px;
    animation: jump 1.2s linear infinite;
    cursor: pointer;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 768px) {
    grid-area: 2/1/3/3;
  }
`;

const Div = styled.div`
  scroll-margin: 100px;
`;

export const Home = ({ children }) => {
  return (
    <Div id="Home">
      <StyledSection>
        <StyledContainer>
          <ImgContainer data-aos="fade-up">
            <Img src={Igor} alt="Igor"></Img>
          </ImgContainer>
          <Introduction />
          <LearnMore href="#About" data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faChevronDown} />
          </LearnMore>
        </StyledContainer>
      </StyledSection>
    </Div>
  );
};
