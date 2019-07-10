import React from "react";
import { Grid, Pictures, Picture, Description, Title } from "./styles";
import profile_pic from "../../assets/gurren_lagann_nia.jpg";

export default function About() {
  return (
    <Grid>
      <Title>sobre mim</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        venenatis lectus ut massa suscipit placerat. Praesent id justo viverra,
        convallis elit quis, dapibus est. Quisque porta, nisl non rutrum dictum,
        tortor justo tincidunt elit, sed ultrices nisi elit ut magna. Vestibulum
        a nulla in ligula rutrum semper sit amet ac diam. Donec fermentum
        vestibulum maximus.
      </Description>
      <Pictures>
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
        <Picture src={profile_pic} />
      </Pictures>
    </Grid>
  );
}
