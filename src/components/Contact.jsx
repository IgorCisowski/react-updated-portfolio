import React from "react";
import styled from "styled-components";
import { Section } from "../elements/Section";
import { Container } from "../elements/Container";
import { Heading } from "../elements/Heading";
import { Title } from "../elements/Title";
import { useForm, ValidationError } from "@formspree/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SubmitMessage } from "./SubmitMessage";
import { OtherContact } from "./OtherContact";

const StyledSection = styled(Section)`
  background-color: rgba(60, 60, 60, 0.2);
  padding-bottom: 70px;
  background-image: radial-gradient(
    50% 50% at 100% 120%,
    #3f2323,
    transparent 450px
  );
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
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr, 1fr;
    column-gap: 20px;
  }

  @media screen and (min-width: 1024px) {
    column-gap: 40px;
  }
`;

const Diver = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    grid-area: 1/1/2/2;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  background-color: rgba(29, 29, 29, 0.6);
  padding: 45px 10px 74px;
  border-radius: 16px;
  margin-bottom: 60px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  // backdrop-filter: blur(5px);

  @media screen and (min-width: 768px) {
    grid-area: 1/2/2/3;
  }
`;

const Input = styled.input`
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 12px;
  outline: none;
  border-style: none;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 2px solid rgb(92, 91, 87);
  width: 100%;
  font-family: "spacegrotesk", sans-serif;
  transition: 0.3s;
  ::placeholder {
    color: white;
  }

  :focus {
    border-bottom: 2px solid white;
  }

  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Textarea = styled.textarea`
  font-weight: 500;
  border-radius: none;
  color: white;
  min-height: 128px;
  font-size: 18px;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  resize: none;
  border-bottom: 2px solid rgb(60, 60, 60);
  font-family: "spacegrotesk", sans-serif;
  transition: 0.3s;
  ::placeholder {
    color: white;
  }

  :focus {
    border-bottom: 2px solid white;
    border-radius: none;
  }

  font-size: 18px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding-bottom: 12px;
  border: none;
  border-bottom: 2px solid rgb(60, 60, 60);
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  color: white;
  border-radius: 0;
  background-color: transparent;
  width: max-content;
  font-family: "spacegrotesk", sans-serif;

  ::placeholder {
    color: white;
  }

  svg {
    margin-left: 6px;
    font-size: 20px;
    transition: 0.3s;
  }

  :hover svg {
    transform: translateX(5px);
  }

  ::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    width: 0;
    border-bottom: 2.3px solid white;
    transition: 0.3s;
  }

  :hover::after {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Div = styled.div`
  scroll-margin: 40px;
  @media screen and (min-width: 768px) {
    scroll-margin: 0px;
  }
  @media screen and (min-width: 1600px) {
    scroll-margin: -20px;
  }
`;

export const Contact = () => {
  const [state, handleSubmit] = useForm("xjvznjzv");

  return (
    <Div id="Contact">
      <StyledSection>
        <StyledContainer>
          <Diver>
            <div data-aos="fade-up" data-aos-delay="100">
              <Heading>CONTACT ME</Heading>
              <Title>
                Have a question? Want to Collaborate? Send me a message
              </Title>
            </div>
          </Diver>
          <Form onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="150">
            {state.succeeded ? (
              <SubmitMessage />
            ) : (
              <>
                <Input
                  id="text"
                  type="text"
                  name="text"
                  placeholder="Full Name"
                  required
                ></Input>
                <ValidationError
                  prefix="Text"
                  field="text"
                  errors={state.errors}
                />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                ></Input>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                ></Textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button type="submit" disabled={state.submitting}>
                  Contact me
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </>
            )}
          </Form>
          <OtherContact />
        </StyledContainer>
      </StyledSection>
    </Div>
  );
};
