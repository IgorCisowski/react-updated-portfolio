import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const StyledArrow = styled.div`
  z-index: 20;
  animation: jump 1.2s linear infinite;
  cursor: pointer;
  position: fixed;
  font-size: 20px;
  right: 10px;
  bottom: ${({ show }) => (show ? "25px" : "-50px")};
  color: white;
  transition: ${({ show }) => (show ? "0.5s" : "0.5s")};

  @media screen and (min-width: 768px) {
    right: 24px;
    font-size: 25px;
  }
`;

export const ArrowToTop = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      window.scrollY > lastScrollY ? setShow(false) : setShow(true);
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.scrollY < 320 && setShow(false);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <StyledArrow onClick={handleTop} show={show}>
        <FontAwesomeIcon icon={faChevronUp} />
      </StyledArrow>
    </>
  );
};
