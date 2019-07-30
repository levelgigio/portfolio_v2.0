import styled from "styled-components";
import background_gif from "../../assets/coding-2.gif";
import mouse from "../../assets/mouse.svg";

export const Background = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  background-image: url(${background_gif});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
`;

export const Name = styled.h2`
  grid-area: name;
  font-size: 3vh;
  display: flex;
  margin-left: 5vw;
  margin-top: 5vh;
  padding: 0;
  color: white;
  justify-content: flex-start;
  font-size: 1.5em;
`;

export const Languages = styled.span.attrs({
  role: "img",
  ariaLabel: "languages"
})`
  grid-area: languages;
  display: flex;
  justify-content: flex-end;
  text-align: center;
  margin-right: 5vw;
  margin-top: 5vh;
  font-size: 1.5em;
  padding: 0;
`;

export const Description = styled.h1`
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  font-size: 2.2em;

  @media screen and (max-width: 700px) {
    font-size: 1.2em;
  }
`;

export const Footer = styled.h3`
  grid-area: footer;
  display: flex;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 1vh;
  font-size: 1.2em;

  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
`;

export const Mouse = styled.img.attrs({
  src: mouse
})`
  height: 3vw;
  width: auto;

  position: relative;
  margin-top: 20px;
  padding: 0;
  font-size: 1em;
  -webkit-animation: mymove 1s infinite; /* Safari 4.0 - 8.0 */
  animation: go_up 1s infinite;

  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes go_up {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: 10px;
    }
  }

  @keyframes go_up {
    0% {
      bottom: 0px;
    }
    100% {
      bottom: 10px;
    }
  }

  @media screen and (max-width: 700px) {
    height: 3vh;
  }
`;

export const Grid = styled.div`
  display: grid;
  height: calc(100vh - 20px);
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "name . . languages"
    ". main main ."
    ". footer footer .";
  padding: 10px;

  @media screen and (max-width: 700px) {
    display: grid;
    height: calc(100vh - 20px);
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "name languages"
      "main main"
      "footer footer";
    padding: 10px;
  }
`;
