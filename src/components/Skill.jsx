import React, { useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ts from "../images/icons/ts.svg";
import tail from "../images/icons/tailwind.svg";
import next from "../images/icons/next.svg";
import sc from "../images/icons/styledCom.svg";
const SkillCards = styled.div`
  width: 100%;
  margin: 50px 0 20px;
  padding: 0 5px 10px 0;
  display: flex;
  gap: 20px;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 99%;
  padding: 60px 30px 50px;

  background-color: rgba(29, 29, 29, 0.5);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  font-size: 18px;

  scroll-snap-align: start;
  user-select: none;

  @media screen and (min-width: 512px) {
    min-width: 47%;
    margin-right: 5px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 23.5%;
    margin-right: 0px;
  }
`;

const CardLogo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 50%;
  width: 7vh;
  height: 7vh;
  overflow: hidden;

  img {
    position: absolute;
    width: 80%;
  }
`;

const H4 = styled.h4`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Paragraph = styled.div`
  margin-top: 25px;
  width: 100%;
  max-width: 56px;
  min-height: 6px;
  background-color: white;
`;

export const Skill = () => {
  const wrapperRef = useRef(null);
  let pressed = false;
  let startX = 0;

  const handleMouseDown = (e) => {
    pressed = true;
    startX = e.clientX;
    wrapperRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    pressed = false;
  };

  const handleMouseUp = () => {
    pressed = false;
    wrapperRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!pressed) {
      return;
    }
    wrapperRef.current.scrollLeft += startX - e.clientX;
  };

  return (
    <SkillCards
      data-aos="fade-up"
      data-aos-delay="150"
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseMove}
    >
      {skills.map(({ icon, color, title, iconn }) => {
        return (
          <Card key={title}>
            <CardLogo>
              <FontAwesomeIcon icon={icon} color={color} />
              <img src={iconn} alt="" />
            </CardLogo>
            <H4>{title}</H4>
            <Paragraph></Paragraph>
          </Card>
        );
      })}
    </SkillCards>
  );
};

const skills = [
  {
    icon: faHtml5,
    color: "#e56027",
    title: "HTML5",
  },
  {
    icon: faCss3Alt,
    color: "#2760e5",
    title: "CSS",
  },
  {
    iconn: sc,
    color: "#2760e5",
    title: "Styled Components",
  },
  {
    iconn: tail,
    color: "#2760e5",
    title: "Tailwind",
  },
  {
    icon: faSquareJs,
    color: "#f2cd37",
    title: "JavaScript",
  },
  {
    iconn: ts,
    color: "#2D79C7",
    title: "TypeScript",
  },
  {
    icon: faReact,
    color: "#00d1f2",
    title: "React JS",
  },
  {
    iconn: next,
    color: "#00d1f2",
    title: "Next.js",
  },
  {
    icon: faGithub,
    color: "black",
    title: "Github",
  },
];
