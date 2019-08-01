import styled from "styled-components";

export const Course = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: black;
  outline: 3px solid white;
  outline-offset: -15px;
  padding: 40px;
  color: white;
  min-width: 40%;
  margin: 10px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-right: 60px;
`;

export const TagDescription = styled.p`
  margin-left: 10px;
`;
