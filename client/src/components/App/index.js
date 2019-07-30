import React, { useEffect } from "react";
import Splash from "../Splash";
import About from "../About";
import { WhiteSpace } from "./styles";
import {
  Title,
  Tile,
  LargeText,
  Squares,
  Square,
  MediumText,
  Text
} from "../Generic/styles";

export default function App() {
  // Everytime a variable in the array changes, this useEffect function triggers
  // empty array means it only triggers once, when mounting component
  // and the return statement will trigger when unmounting component
  useEffect(() => {
    callApi().then(res => (document.title = res));
  }, []);

  async function callApi() {
    const response = await fetch("http://localhost:8000/api/mensagem");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body.express;
  }

  return (
    <>
      <Splash />
      <About />
      <Tile>
        <Title>
          <LargeText>educação</LargeText>
        </Title>
        <Squares>
          <Square>
            <MediumText>Engenharia de Computação</MediumText>
            <Text>Universidade Tecnológica Federal do Paraná (UTFPR)</Text>
          </Square>
          <Square>
            <MediumText>Automação Industrial</MediumText>
            <Text>
              Instituto Federal de Educação, Ciência e Tecnologia do Rio de
              Janeiro (IFRJ)
            </Text>
          </Square>
        </Squares>
      </Tile>
      <WhiteSpace />
    </>
  );
}
