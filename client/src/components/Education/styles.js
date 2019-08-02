import styled from "styled-components";

export const Course = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  background-color: black;
  outline: 3px solid white;
  outline-offset: -15px;
  padding: 40px;
  color: white;
  margin: 10px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tags = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin-right: 60px;
`;

export const TagDescription = styled.p`
  margin-left: 10px;
`;
