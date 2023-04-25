import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const StyledOtherContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    grid-area: 3/1/4/3;
  }
`;

const Socials = styled.div`
  display: flex;
  margin-top: 18px;
  transition: 0.3s;

  :hover svg {
    color: gray;
  }

  svg {
    color: white;
    font-size: 28px;
    padding: 0 26px;
    transition: 0.3s;

    :hover {
      color: white;
    }
  }
`;

export const OtherContact = () => {
  return (
    <StyledOtherContact data-aos="fade-up" data-aos-delay="100">
      <p>Or reach out to me on</p>
      <Socials>
        {socials.map(({ id, icon, href, delay }) => {
          return (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          );
        })}
      </Socials>
    </StyledOtherContact>
  );
};

const socials = [
  {
    id: 1,
    icon: faEnvelope,
    href: "mailto:igorcisowski2098@gmail.com",
    delay: 100,
  },
  {
    id: 2,
    icon: faGithub,
    href: "https://github.com/IGORCISOWSKI",
    delay: 150,
  },
  {
    id: 3,
    icon: faLinkedin,
    href: "https://www.linkedin.com/in/igor-cisowski-94375b244/",
    delay: 200,
  },
];
