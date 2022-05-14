import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const RecipeContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SearchBar = styled.input`
  margin-top: 120px;
  margin-bottom: 80px;
  padding: 8px 10px 8px 15px;
  font-size: 1.1rem;
  width: 40vw;
  border-radius: 8px;
  border: 1px solid #cacaca;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

  @media (max-width: 600px) {
    width: 60vw;
  }
`;
