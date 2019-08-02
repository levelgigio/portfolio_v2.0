import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20%;
  min-width: 20%;
  flex-wrap: wrap;
  text-align: center;
  margin-bottom: 4vh;
`;

export const Description = styled.p`
  margin-top: 5px;
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
