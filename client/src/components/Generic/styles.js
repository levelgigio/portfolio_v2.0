import styled from "styled-components";

export const Title = styled.div`
  justify-content: space-around;
  display: flex;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
`;

export const LargeText = styled.h1`
  font-size: 4em;
`;

export const MediumText = styled.h2`
  font-size: 2em;
  margin-bottom: 0.5em;
`;

export const Text = styled.p`
  font-size: 1.5em;
`;

export const Tile = styled.div`
  width: 100%;
  padding-right: 10vw;
  padding-left: 10vw;
`;

export const Square = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Squares = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
