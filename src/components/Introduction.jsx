import React from "react";
import styled from "styled-components";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    align-items: start;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  line-height: 1.5em;
  border: none;
  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 26px;
    align-items: start;

    p:nth-child(3) {
      border-bottom: 2px solid #791818b6;
      width: 100%;
      padding-bottom: 5px;
    }
  }

  @media screen and (min-width: 1059px) {
    font-size: 32px;
    line-height: 1.7em;
  }
`;

const Name = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0.8px;

  @media screen and (min-width: 768px) {
    font-size: 52px;
  }

  @media screen and (min-width: 1059px) {
    font-size: 76px;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 16px;
  width:max-content;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }

  :hover a {
    color: gray;
  }

  a {
    color: white;
    font-size: 30px;
    transition: 0.3s;

    &:nth-child(1) {
      padding-right:10px;
    }

    &:nth-child(2) {
      padding-left:10px;
    }

    :hover {
      color: white;
    }
`;

export const Introduction = () => {
  return (
    <StyledIntro data-aos="fade-up" data-aos-delay="150">
      <Intro>
        <p>Hello! I'm</p>
        <Name>IGOR CISOWSKI</Name>
        <p>Front-end Developer</p>
      </Intro>
      <Socials>
        {socials.map(({ id, link, img }) => {
          return (
            <a key={id} href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={img} />
            </a>
          );
        })}
      </Socials>
    </StyledIntro>
  );
};

const socials = [
  {
    id: 1,
    img: faGithub,
    link: "https://github.com/IGORCISOWSKI",
  },
  {
    id: 2,
    img: faLinkedin,
    link: "https://www.linkedin.com/in/igor-cisowski-94375b244/",
  },
];
