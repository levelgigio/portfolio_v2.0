import React from "react";
import { Course, Tags, TagWrapper, TagDescription } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMapMarkerAlt,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";

export default function Education({ title, institute, location, date }) {
  return (
    <Course>
      <h3>{title}</h3>
      <p>{institute}</p>
      <Tags>
        {location && <Tag icon={faMapMarkerAlt} text={location} />}
        {date && <Tag icon={faCalendarAlt} text={date} />}
      </Tags>
    </Course>
  );
}

function Tag({ icon, text }) {
  return (
    <TagWrapper>
      <FontAwesomeIcon icon={icon} />
      <TagDescription>{text}</TagDescription>
    </TagWrapper>
  );
}
