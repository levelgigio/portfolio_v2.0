import React from "react";
import { Wrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Knowledge({ icon, text }) {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon} size="8x" />
      <p>{text}</p>
    </Wrapper>
  );
}
