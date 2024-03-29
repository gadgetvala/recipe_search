import styled from 'styled-components';

type IProps = {
  isSelected: boolean;
  onClick: (e: Event) => void;
};

export const MainContainer = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 600px) {
    width: 90%;
    padding-top: 3rem;
    flex-direction: column;
  }

  @media (max-width: 992px) {
    width: 90%;
    padding-top: 2rem;
    flex-direction: column;
  }
`;

export const MainImageContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & img {
    margin-top: 2rem;
    border-radius: 6px;
  }

  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

export const MainContentContainer = styled.div`
  flex: 1;
`;

export const ContentSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin: 1rem 2rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
`;

export const ContentButton = styled.p`
  background-color: ${(props: IProps) =>
    props.isSelected ? '#d0c9c0' : '#9d9589'};
`;
