import React from "react";
import { Course } from "./styles";

export default function Education({ title, location }) {
  return (
    <Course>
      <h2>{title}</h2>
      <p>{location}</p>
    </Course>
  );
}
