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

const ResumeContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid #791818b6;
`;

const Resume = styled.a`
  color: white;
  cursor: pointer;
  width: max-content;
  font-size: 18px;
  letter-spacing: 0.05em;
  font-weight: bold;
  display: flex;
  align-items: baseline;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;
  padding-bottom: 30px;
`;

const Div = styled.div`
  scroll-margin: 40px;

  @media screen and (min-width: 768px) {
    scroll-margin: 55px;
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
                My name is Igor, I'm highly passionate about programming and
                creating interactive and responsive web applications. I started
                my web development journey two years ago, focusing on developing
                websites using JavaScript TypeSctipt, React, Next.js, HTML, CSS,
                and Git.
              </p>
              <p>
                Currently, I'm looking for new opportunities as a front-end
                developer. I'm a quick learner and am always eager to expand my
                knowledge and skill set. My inbox is always open so feel free to
                drop me a message I'm looking forward to working with you!
              </p>
            </AboutME>
            <ResumeContainer>
              <Resume href="Igor Cisowski - Resume.pdf" download>
                my resume
                <FontAwesomeIcon icon={faDownload} />
              </Resume>
            </ResumeContainer>
          </div>
        </Container>
      </StyledSection>
    </Div>
  );
};
