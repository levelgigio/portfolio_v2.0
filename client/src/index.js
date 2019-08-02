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
  faDatabase,
  faDesktop,
  faCode,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGitSquare,
  faGithub,
  faGitAlt,
  faJs,
  faWindows,
  faApple,
  faRaspberryPi,
  faPython,
  faAws,
  faHtml5,
  faCss3,
  faCss3Alt,
  faDocker,
  faReact,
  faLinux
} from "@fortawesome/free-brands-svg-icons";
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
        <Knowledge icon={faPython} text="Python" />
        <Knowledge icon={faJs} text="Javascript" />
        <Knowledge icon={faHtml5} text="HTML5" />
        <Knowledge icon={faCss3Alt} text="CSS3" />
        <Knowledge icon={faReact} text="React" />

        <Knowledge icon={faCode} text="C/C++" />
        <Knowledge icon={faDocker} text="Docker" />
        <Knowledge icon={faDatabase} text="PostgreSQL, MongoDB" />
        <Knowledge icon={faGitAlt} text="Git" />
        <Knowledge icon={faAws} text="Amazon Web Services" />

        <Knowledge icon={faWindows} text="Windows" />
        <Knowledge icon={faApple} text="MacOS" />
        <Knowledge icon={faLinux} text="Linux" />
        <Knowledge icon={faMicrochip} text="Arduino" />
        <Knowledge icon={faRaspberryPi} text="Raspberry Pi" />
        <Knowledge icon={faPlus} text="and more..." />
      </MultipleItens>
      <Divider />
      <Title>prêmios</Title>
      <MultipleItens>
        <Education
          title="1st at RoboCupJr OnStage"
          institute="Latin American and Brazilian Robotics Competition"
          location="João Pessoa, PB"
          date="2014"
          award
        />
        <Education
          title="1st at RoboCupJr OnStage"
          institute="RoboCup"
          location="Volta Redonda, RJ"
          date="2014"
          award
        />
        <Education
          title="4th at RoboCupJr Soccer Lightweight"
          institute="Latin American and Brazilian Robotics Competition"
          location="João Pessoa, PB"
          date="2015"
          award
        />
        <Education
          title="16th at RoboCupJr Soccer Lightweight"
          institute="RoboCup"
          location="Hefei, China"
          date="2015"
          award
        />
      </MultipleItens>
      <Divider />
      <Title>línguas</Title>
      <MultipleItens>
        <Education title="Portuguese" institute="native" level="5" language />
        <Education title="English" institute="advanced" level="4" language />
        <Education title="French" institute="intermediate" level="3" language />
      </MultipleItens>
      <WhiteSpace />
    </ContentWrapper>
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
