import React from "react";
import { render } from "react-dom";
import { GlobalStyle } from "./styles";
import Splash from "./components/Splash";
import {
  Title,
  ContentWrapper,
  WhiteSpace,
  MultipleItens,
  Divider
} from "./components/Generic/styles";
import About from "./components/About";
import Education from "./components/Education";
import profilePic from "../src/assets/profile-no-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faFileCode,
  faMicrochip,
  faDatabase
} from "@fortawesome/free-solid-svg-icons";
import Knowledge from "./components/Knowledge";

render(
  <>
    <Splash />
    <ContentWrapper>
      <Divider />
      <Title>sobre mim</Title>
      <About
        description="I’ve been programming since 2013 where I began working with a robotics
        team called Equipe Jaguar during my high school period. I have
        contributed with Equipe Jaguar for 2 years and we have won multiple
        competitions together. The one that I am most proud of is an
        International competition that took place in China, called RoboCup.
        Just after I got my Industrial Technician degree, I began a bachelor’s
        degree in Computer Engineer that I am currently enrolled.
        Currently I am a teaching assistant in the discipline of Programming
        Fundamentals I, and my passion is working with data and full-stack
        programming."
        photo={profilePic}
      />
      <Divider />
      <Title>educação</Title>
      <MultipleItens>
        <Education
          title="Bachelor of Computer Engineering"
          institute="Federal University of Technology - Paraná (UTFPR)"
          location="Curitiba, PR"
          date="2017 - atual"
        />
        <Education
          title="Industrial Automation Technician"
          institute="Federal Institute of Rio de Janeiro (IFRJ)"
          location="Volta Redonda, RJ"
          date="2013 - 2016"
        />
      </MultipleItens>
      <Divider />
      <Title>conhecimentos</Title>
      <MultipleItens>
        <Knowledge
          icon={faFileCode}
          text="C/C++, JavaScript, Python, HTML, CSS"
        />
        <Knowledge icon={faMicrochip} text="VHDL, Arduino, Raspberry" />
        <Knowledge icon={faDatabase} text="Postgres, MongoDB, SQL" />
        <Knowledge icon={faFileCode} text="C/C++, JavaScript, HTML, CSS" />
      </MultipleItens>
      <WhiteSpace />
    </ContentWrapper>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
