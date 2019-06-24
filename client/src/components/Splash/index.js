import React from "react";
import {
  Wrapper,
  BackgroundVideo,
  Grid,
  Name,
  Languages,
  Description,
  Footer,
  ArrowUp
} from "./styles";

export default function Splash() {
  return (
    <Wrapper>
      <BackgroundVideo />
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
    </Wrapper>
  );
}
