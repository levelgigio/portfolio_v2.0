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
      <PhotoWrapper>
        <Photo src={profilePic} />
      </PhotoWrapper>
    </Grid>
  );
}
