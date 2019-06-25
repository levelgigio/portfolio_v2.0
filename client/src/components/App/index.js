import React, { useEffect } from "react";
import Splash from "../Splash";
import { WhiteSpace } from "./styles";

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
      <WhiteSpace />
    </>
  );
}
