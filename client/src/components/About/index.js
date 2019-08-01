import React from "react";
import { Photo, Description, Wrapper } from "./styles";
import githubIcon from "../../assets/github-logo.svg";
import linkedinIcon from "../../assets/linkedin-logo.svg";
import whatsappIcon from "../../assets/whatsapp-logo.svg";
import emailIcon from "../../assets/close-envelope.svg";

export default function About({ description, photo }) {
  return (
    <Wrapper>
      <Description>
        <p>{description}</p>
      </Description>
      {photo && <Photo src={photo} />}
    </Wrapper>
  );
}
