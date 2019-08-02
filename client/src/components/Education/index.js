import React from "react";
import { Course, Tags, TagWrapper, TagDescription, Wrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faTrophy,
  faLanguage,
  faCircle,
  faCircleNotch,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";

export default function Education({
  title,
  institute,
  location,
  date,
  level,
  award,
  language
}) {
  return (
    <Course>
      {award && (
        <FontAwesomeIcon
          icon={faTrophy}
          size="5x"
          style={{
            marginRight: "25px"
          }}
        />
      )}
      {language && (
        <FontAwesomeIcon
          icon={faLanguage}
          size="5x"
          style={{
            marginRight: "25px"
          }}
        />
      )}
      <Wrapper>
        <h3>{title}</h3>
        <p>{institute}</p>
        <Tags>
          {location && <Tag icon={faMapMarkerAlt} text={location} />}
          {date && <Tag icon={faCalendarAlt} text={date} />}
          {level &&
            Array.from(Array(parseInt(level))).map(() => {
              return (
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{
                    marginRight: "5px"
                  }}
                />
              );
            })}
          {level &&
            Array.from(Array(5 - parseInt(level))).map(() => {
              return (
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  style={{
                    marginRight: "5px"
                  }}
                />
              );
            })}
        </Tags>
      </Wrapper>
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

function generateLevel(quantity) {}
