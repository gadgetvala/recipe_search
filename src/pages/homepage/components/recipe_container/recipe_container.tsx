import { Link } from 'react-router-dom';
import { RecipeContainerS } from './style';
interface IParameter {
  img: string;
  name: string;
  id: string;
}

const RecipeContainer = ({ img, name, id }: IParameter) => {
  return (
    <Link to={`/details/${id}`}>
      <RecipeContainerS>
        <img src={img} alt={name} />
        <h1>{name}</h1>
      </RecipeContainerS>
    </Link>
  );
};

export default RecipeContainer;
