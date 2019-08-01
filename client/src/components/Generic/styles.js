import styled from "styled-components";

export const Title = styled.h1`
  justify-content: space-around;
  display: flex;
  padding-right: 5vw;
  padding-left: 5vw;
  padding-top: 5vw;
  padding-bottom: 3vw;
`;

export const Wrapper = styled.div`
  margin-right: calc(5vw + 10px);
  margin-left: calc(5vw + 10px);
`;

export const MultipleItens = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const WhiteSpace = styled.div`
  width: auto;
  height: 100vh;
  background-color: white;
`;
