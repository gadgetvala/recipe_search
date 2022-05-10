import styled from 'styled-components';

export const RecipeContainerS = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 200px;
  width: 300px;
  border-radius: 10px;
  position: relative;
  text-align: center;
  font-size: 1rem;
  color: white;
  transition: 1s all;
  margin: 20px;

  & img {
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    filter: brightness(60%);
  }

  & h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    & img {
      filter: brightness(70%);
    }

    font-size: 1.2rem;
  }
`;
