import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "title pictures"
    "description pictures"
    "social pictures";
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
      "pictures"
      "description";
  }
`;

export const Pictures = styled.div`
  grid-area: pictures;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Picture = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: 150px;
  height: 150px;
  margin: 10px;
  border-radius: 3px;
  box-sizing: border-box;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Description = styled.div`
  grid-area: description;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  padding-left: 5vw;
  padding-top: 2vw;
  text-align: justify;
  font-size: 1.2em;
  color: #555;

  @media screen and (max-width: 700px) {
    padding: 5vw;
  }
`;

export const Title = styled.h1`
  grid-area: title;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 4em;
`;
