import React from "react";
import {
  Grid,
  PhotoWrapper,
  Photo,
  Description,
  Title,
  Icon,
  Social
} from "./styles";
import profilePic from "../../assets/profile-no-bg.png";
import githubIcon from "../../assets/github-logo.svg";
import linkedinIcon from "../../assets/linkedin-logo.svg";
import whatsappIcon from "../../assets/whatsapp-logo.svg";
import emailIcon from "../../assets/close-envelope.svg";

export default function About() {
  return (
    <Grid>
      <Title>sobre mim</Title>
      <Description>
        {/* Formado técnico em Automação Industrial pelo IFRJ (Instituto Federal de
        Educação, Ciência e Tecnologia do Rio de Janeiro).
        <br /> <br /> Ex-membro da Equipe Jaguar de Robótica Aplicada do IFRJ,
        pela qual participou de diversas competições, tendo como principais:
        <br />
        XII Competição Brasileira de Robótica (2014)
        <br /> XIII Competição Brasileira de Robótica (2015)
        <br /> Robocup (2014)
        <br />
        Robocup (2015) que ocorreu em Hefei, China.
        <br /> <br />
        Atualmente cursa Engenharia de Computação pela UTFPR (Universidade
        Tecnológica Federal do Paraná), campus Curitiba. */}
        I’ve been programming since 2013 where I began working with a robotics
        team called Equipe Jaguar during my high school period. I have
        contributed with Equipe Jaguar for 2 years and we have won multiple
        competitions together. The one that I am most proud of is an
        International competition that took place in China, called RoboCup. Just
        after I got my Industrial Technician degree, I began a bachelor’s degree
        in Computer Engineer that I am currently enrolled. <br />
        Currently I am a teaching assistant in the discipline of Programming
        Fundamentals I, and my passion is working with data and full-stack
        programming.
      </Description>
      <PhotoWrapper>
        <Photo src={profilePic} />
      </PhotoWrapper>
    </Grid>
  );
}
