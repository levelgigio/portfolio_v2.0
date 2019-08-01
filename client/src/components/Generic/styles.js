import styled from "styled-components";

export const Title = styled.h1`
  justify-content: space-around;
  display: flex;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
`;

export const ContentWrapper = styled.div`
  margin-right: 10vw;
  margin-left: 10vw;
`;

export const MultipleItens = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Divider = styled.h1`
  justify-content: space-around;
  display: flex;
  background-color: black;
  height: 2px;
  margin-left: 25vw;
  margin-right: 25vw;
  margin-top: 6vw;
`;

export const WhiteSpace = styled.div`
  width: auto;
  height: 100vh;
  background-color: white;
`;
