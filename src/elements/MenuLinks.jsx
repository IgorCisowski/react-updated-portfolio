import React from "react";
import styled from "styled-components";
// import { Link } from "react-scroll";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0px;
  width: 100%;
  height: 92vh;
  position: absolute;
  top: 8vh;
  right: 0;
  background-color: rgba(29, 29, 29, 1);
  background-image: radial-gradient(
    farthest-corner at bottom right,
    #3f2323,
    transparent 350px
  );
  transform: translateX(${({ isOpen }) => (isOpen ? "0%" : "100%")});
  transition: 0.3s ease-in-out;

  @media screen and (min-width: 500px) {
    background-image: radial-gradient(
      farthest-corner at bottom right,
      #3f2323,
      transparent 550px
    );
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
    position: static;
    height: auto;
    background: transparent;
    transform: none;
    padding: 0;
  }
`;

const Li = styled.li`
  list-style: none;
  }
`;

const A = styled.a`
  cursor: pointer;
  color: white;
  font-size: 35px;
  font-weight: bold;
  color: white;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 400;
    position: relative;
    transition: 0.2s;

    &:hover {
      color: #791818;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1.5px;
      background-color: #791818;
      transition: 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const MenuLinks = ({ isOpen, handleExit }) => {
  return (
    <Ul isOpen={isOpen}>
      {navLinks.map((link) => {
        return (
          <Li key={link}>
            <A href={`#${link}`} onClick={handleExit}>
              {link}
            </A>
          </Li>
        );
      })}
    </Ul>
  );
};

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];
