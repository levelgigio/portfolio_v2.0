import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title photo"
    "description photo";
  padding: 5vw;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "title"
      "photo"
      "description";
    padding: 0vw;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 4em;

  @media screen and (max-width: 700px) {
    padding: 5vw;
    font-size: 3em;
    border-bottom: 0px solid currentColor;
  }
`;

export const PhotoWrapper = styled.div`
  grid-area: photo;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: 40vh;
  height: 40vh;
  margin: 10px;
  border-radius: 10px;

  @media screen and (max-width: 700px) {
    width: 90vw;
    height: 90vw;
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const Description = styled.div`
  grid-area: description;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  padding-left: 5vw;
  margin-right: 5vw;
  padding-top: 2vw;
  text-align: justify;
  font-size: 1.2em;
  color: #555;
  text-justify: justify;

  @media screen and (max-width: 700px) {
    padding-left: 10vw;
    margin-right: 10vw;
    padding-top: 8vw;
    padding-bottom: 8vw;
  }
`;

export const Social = styled.div`
  grid-area: social;
  margin-top: 10px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-around;
  padding-left: 5vw;
  padding-right: 5vw;
  @media screen and (max-width: 700px) {
    height: 5vh;
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const Icon = styled.img.attrs(({ src }) => ({
  src: src
}))`
  height: 100%;
`;
