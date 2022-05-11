import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
`;

export const MainHeaderContainer = styled.div`
  text-align: center;

  & h1 {
    letter-spacing: 10px;
    word-spacing: 10px;
    font-size: 3rem;
  }

  & div {
    margin-top: 1.5rem;
  }

  & div p {
    letter-spacing: 2px;
    word-spacing: 4px;
    font-size: 1rem;
  }
`;

export const NotFoundImage = styled.img`
  height: 80%;
`;
