import { RecipeContainerS } from './style';

const RecipeContainer = ({ img, name }: { img: string; name: string }) => {
  return (
    <RecipeContainerS>
      <img src={img} alt={name} />
      <h1>{name}</h1>
    </RecipeContainerS>
  );
};

export default RecipeContainer;
