import React from "react";
import styled from "styled-components";
import { Section } from "../elements/Section";
import { Container } from "../elements/Container";
import { Heading } from "../elements/Heading";
import { Title } from "../elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";
import { Skill } from "./Skill";

const StyledSection = styled(Section)`
  background-color: rgba(60, 60, 60, 0.2);
  background-image: radial-gradient(
    farthest-corner at right bottom,
    #3f2323,
    transparent 360px
  );
  user-select: none;

  padding: 130px 0;

  @media screen and (min-width: 768px) {
    background-image: radial-gradient(
      farthest-corner at bottom right,
      #3f2323,
      transparent 800px
    );
  }
  @media screen and (min-width: 1024px) {
    background-image: radial-gradient(
      farthest-corner at bottom right,
      #3f2323,
      transparent 1000px
    );
  }

  @media screen and (min-width: 1400px) {
    background-image: radial-gradient(
      farthest-corner at bottom right,
      #3f2323,
      transparent 1300px
    );
  }

  @media screen and (min-width: 1600px) {
    padding: 155px 0;
  }
`;

const SwipeLeft = styled.div`
  font-size: 18px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
`;

const Div = styled.div`
  scroll-margin: 30px;

  @media screen and (min-width: 768px) {
    scroll-margin: -10px;
  }
  @media screen and (min-width: 1600px) {
    scroll-margin: 64px;
  }
`;

export const Skills = () => {
  return (
    <Div id="Skills">
      <StyledSection>
        <Container>
          <div data-aos="fade-up" data-aos-delay="100">
            <Heading>MY SKILLS</Heading>
            <Title>My extensive list of skills</Title>
          </div>
          <Skill />
          <SwipeLeft data-aos="fade-up" data-aos-delay="100">
            <FontAwesomeIcon icon={faHandPointer} color={"#851a1a"} />
            SWIPE LEFT
          </SwipeLeft>
        </Container>
      </StyledSection>
    </Div>
  );
};
