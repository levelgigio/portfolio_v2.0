import React from "react";
import {
  Background,
  Grid,
  Name,
  Languages,
  Description,
  Footer,
  Mouse
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
          <Mouse />
        </Footer>
      </Grid>
    </Background>
  );
}
