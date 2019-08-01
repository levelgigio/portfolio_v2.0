import styled from "styled-components";

export const Photo = styled.img.attrs(({ src }) => ({
  src: src
}))`
  width: 40%;
  height: 40%;

  @media screen and (max-width: 700px) {
    width: 90vw;
    height: 90vw;
  }
`;

export const Description = styled.div`
  padding-top: 2vw;
  padding-bottom: 2vw;
  text-align: justify;
  color: white;
  text-justify: justify;
  display: flex;
  flex-direction: column;
  margin: 5vw;

  @media screen and (max-width: 700px) {
    padding-left: 10vw;
    margin-right: 10vw;
    padding-top: 8vw;
    padding-bottom: 8vw;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: black;

  outline: 3px solid white;
  outline-offset: -15px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
