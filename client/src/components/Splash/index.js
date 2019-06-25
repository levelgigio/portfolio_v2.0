import React from "react";
import {
  Background,
  Grid,
  Name,
  Languages,
  Description,
  Footer,
  ArrowUp
} from "./styles";

export default function Splash() {
  return (
    <Background>
      <Grid>
        <Name>giovanni forastieri</Name>
        <Languages>🇺🇸 🇫🇷 🇧🇷</Languages>
        <Description>
          oi, eu sou engenheiro de computação & <br />
          técnico em automação industrial & <br />
          desenvolvedor web freelancer.
        </Description>
        <Footer>
          principais trabalhos
          <ArrowUp>⌃</ArrowUp>
        </Footer>
      </Grid>
    </Background>
  );
}
