import React from "react";
import { Wrapper, Description } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Knowledge({ icon, text }) {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon} size="6x" />
      <Description>{text}</Description>
    </Wrapper>
  );
}
