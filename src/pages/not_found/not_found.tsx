import NotFoundAsset from 'assets/not_found.png';
import { MainContainer, MainHeaderContainer, NotFoundImage } from './styles';

const NotFound = () => {
  return (
    <MainContainer>
      <NotFoundImage src={NotFoundAsset} alt="Page Not Found" />
      <MainHeaderContainer>
        <h1>Awww... Don’t Cry.</h1>
        <div>
          <p>It's just a 404 Error!</p>
          <p>
            What you’re looking for may have been misplaced in Long Term Memory.
          </p>
        </div>
      </MainHeaderContainer>
    </MainContainer>
  );
};

export default NotFound;
