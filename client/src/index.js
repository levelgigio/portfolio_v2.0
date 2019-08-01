import React from "react";
import { render } from "react-dom";
import { GlobalStyle } from "./styles";
import Splash from "./components/Splash";
import {
  Title,
  Wrapper,
  WhiteSpace,
  MultipleItens
} from "./components/Generic/styles";
import { About, Photo, Description } from "./components/About/styles";
import Education from "./components/Education";
import profilePic from "../src/assets/profile-no-bg.png";

render(
  <>
    <Splash />
    <Wrapper>
      <Title>sobre mim</Title>
      <About>
        <Description>
          I’ve been programming since 2013 where I began working with a robotics
          team called Equipe Jaguar during my high school period. I have
          contributed with Equipe Jaguar for 2 years and we have won multiple
          competitions together. The one that I am most proud of is an
          International competition that took place in China, called RoboCup.
          Just after I got my Industrial Technician degree, I began a bachelor’s
          degree in Computer Engineer that I am currently enrolled. <br />
          Currently I am a teaching assistant in the discipline of Programming
          Fundamentals I, and my passion is working with data and full-stack
          programming.
        </Description>
        <Photo src={profilePic} />
      </About>
      <Title>educação</Title>
      <MultipleItens>
        <Education
          title="Bachelor of Computer Engineering"
          location="Federal University of Technology - Paraná (UTFPR)"
        />
        <Education
          title="Industrial Automation Technician"
          location="Federal Institute of Rio de Janeiro (IFRJ)"
        />
      </MultipleItens>
      <WhiteSpace />
    </Wrapper>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
