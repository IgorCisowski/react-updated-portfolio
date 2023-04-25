import React from "react";
import styled from "styled-components";
import { Section } from "../elements/Section";
import { Container } from "../elements/Container";
import { Heading } from "../elements/Heading";
import { Title } from "../elements/Title";
import Unloc from "../images/Unloc.png";
import Todo from "../images/ToDo.png";
import Bee from "../images/BeeAI.png";
import Eshop from "../images/eccomerce.png";
import App from "../images/weatherApp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import tailwind from "../images/icons/tailwind.svg";
import css from "../images/icons/css.svg";
import sc from "../images/icons/styledCom.svg";
import ts from "../images/icons/ts.svg";

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: 35px;

  @media screen and (min-width: 728px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 45px;
    grid-row-gap: 55px;
  }
  border-bottom: 2px solid #791818b6;
  padding-bottom: 30px;
`;

const Diver = styled.div`
  dipslay: flex;
  flex-direction: column;
`;

const EachProject = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background-color: rgba(60, 60, 60, 0.2);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);

  @media screen and (min-width: 728px) {
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }

    &:nth-child(2) {
      grid-area: 1/2/3/3;
    }

    &:nth-child(3) {
      grid-area: 2/1/4/2;
    }

    &:nth-child(4) {
      grid-area: 3/2/5/3;
    }

    &:nth-child(5) {
      grid-area: 4/1/6/2;
    }

    &:nth-child(6) {
      grid-area: 5/2/7/3;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  border-radius: 16px 16px 0 0;
  width: 100%;
  padding: 100px 0;
  overflow: hidden;
  @media screen and (min-width: 728px) {
    padding: 160px 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
`;

const About = styled.div`
  padding: 40px 24px 50px;
  @media screen and (min-width: 728px) {
    padding-bottom: 65px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 22px;
`;

const Type = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 18px;

    a svg {
    color: white;
    font-size: 18px;
    animation: shake 1s infinite ease-in-out alternate;
  }

  @keyframes shake {
    100% {
      transform: translateY(-4px);
    }
`;

const ViewProject = styled.div`
  position: relative;
  margin-top: 20px;
  text-transform: uppercase;
  border-bottom: 1px solid rgb(112, 111, 106);
  letter-spacing: 0.5px;
  padding-bottom: 6px;
  width: max-content;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    transition: 0.3s;
  }

  :hover:after {
    width: 100%;
    border-bottom: 1px solid white;
  }

  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
  }

  svg {
    color: white;
    margin-left: 6px;
    transition: 0.3s;
  }

  :hover svg {
    transform: translateX(5px);
  }
`;

const TitleContent = styled.div`
  display: flex;

  svg {
    font-size: 20px;
  }

  @media screen and (min-width: 728px) {
    svg {
      font-size: 28px;
    }

    @media screen and (min-width: 1024px) {
      svg {
        font-size: 40px;
      }
  }
`;

const Div = styled.div`
  scroll-margin: 40px;
  @media screen and (min-width: 768px) {
    scroll-margin: -50px;
  }
  @media screen and (min-width: 1600px) {
    scroll-margin: 60px;
  }
`;

export const Projects = () => {
  return (
    <Div id="Projects">
      <Section>
        <Container>
          <Content>
            <Diver>
              <div data-aos="fade-up" data-aos-delay="100">
                <Heading>MY PROJECTS</Heading>
                <Title>
                  <TitleContent>
                    <p>
                      Take a look at my latest projects{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                  </TitleContent>
                </Title>
              </div>
            </Diver>
            {projects.map(
              ({ img, title, type, desc, fsvg, ssvg, ghl, prl }) => {
                return (
                  <EachProject
                    key={title}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <ImgContainer>
                      <Img src={img} alt="project-img"></Img>
                    </ImgContainer>
                    <About>
                      <ProjectTitle>{title}</ProjectTitle>
                      <Type>
                        {type}
                        <FontAwesomeIcon icon={faReact} color="#00d1f2" />
                        <img src={fsvg} alt="" />
                        {ssvg && <img src={ssvg} alt="" />}|
                        <a href={ghl} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </Type>
                      <p>{desc}</p>
                      <ViewProject>
                        <a href={prl} target="_blank" rel="noreferrer">
                          <p>VIEW PROJECT</p>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                      </ViewProject>
                    </About>
                  </EachProject>
                );
              }
            )}
          </Content>
        </Container>
      </Section>
    </Div>
  );
};

const projects = [
  {
    img: Bee,
    title: "BEE-AI",
    type: "Work Project:",
    desc: "Developed a landing page for a website that utilizes ChatGPT API and integrates it into Slack and Discord - check it at: beeai.pro",
    fsvg: sc,
    ghl: "https://github.com/IgorCisowski/project-bee",
    prl: "https://igorcisowski.github.io/project-bee/",
  },
  {
    img: Unloc,
    title: "UNLOC",
    type: "Work Project:",
    desc: "Helped with the development of a project for a company that provides NFT services called Unloc by creating a landing page",
    fsvg: ts,
    ssvg: tailwind,
    ghl: "https://github.com/IgorCisowski/unloc",
    prl: "https://igorcisowski.github.io/unloc/",
  },
  {
    img: Eshop,
    title: "E-COMMERCE",
    type: "Personal Project:",
    desc: "Developed an E-commerce website featuring a fully working shopping cart using useContext and product filter options",
    fsvg: css,
    ghl: "https://github.com/IgorCisowski/e-commerce",
    prl: "https://igorcisowski.github.io/e-commerce/",
  },
  {
    img: Todo,
    title: "TO DO APP",
    type: "Personal Project:",
    desc: "Created the most cliche app among starting-out developers the to-do app, which allows adding, completing, updating and deleting tasks",
    fsvg: ts,
    ssvg: sc,
    ghl: "https://github.com/IgorCisowski/react-todo-app",
    prl: "https://igorcisowski.github.io/react-todo-app/",
  },
  {
    img: App,
    title: "WEATHER APP",
    type: "Personal Project:",
    desc: "Developed an App that fetches data and displays it on the app allowing to check the weather in cities around the world",
    fsvg: css,
    ghl: "https://github.com/IgorCisowski/Weather-app",
    prl: "https://igorcisowski.github.io/Weather-app/",
  },
];
