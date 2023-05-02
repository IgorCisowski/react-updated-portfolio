import React from "react";
import styled from "styled-components";
import { Section } from "../elements/Section";
import { Container } from "../elements/Container";
import { Heading } from "../elements/Heading";
import { Title } from "../elements/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const StyledSection = styled(Section)`
  @media screen and (min-width: 1600px) {
    padding: 252px 0;
  }
`;

const AboutME = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
  font-size: 16px;

  @media screen and (min-width: 728px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    p {
      margin-right: 125px;
    }
  }
`;

const Resume = styled.a`
  color: white;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 0.05em;
  font-weight: bold;
  display: flex;
  align-items: baseline;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #791818b6;
  padding-bottom: 30px;
`;

const Div = styled.div`
  scroll-margin: 40px;

  @media screen and (min-width: 768px) {
    scroll-margin: 60px;
  }
`;

export const About = () => {
  return (
    <Div id="About">
      <StyledSection>
        <Container>
          <div data-aos="fade-up" data-aos-delay="100">
            <Heading>About ME</Heading>
            <Title>I'm a self-taught Front-end developer</Title>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <AboutME>
              <p>
                My name is Igor, I'm a second-year student of Computer Science,
                highly passionate about programming and building websites. I
                started my journey with front-end development last year where I
                got to know its basic concepts including HTML5, CSS, and
                Javascript as well as its library React.
              </p>
              <p>
                My goal is to find a job as a front-end developer since I
                believe it will take my coding skills to the next level and
                allow me to grow and learn new things while working on new and
                exciting projects
              </p>
            </AboutME>

            <Resume href="Igor Cisowski - Resume.pdf" download>
              my resume
              <FontAwesomeIcon icon={faDownload} />
            </Resume>
          </div>
        </Container>
      </StyledSection>
    </Div>
  );
};
