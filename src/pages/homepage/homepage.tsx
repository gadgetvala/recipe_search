import RecipeContainer from './components/recipe_container/recipe_container';
import { MainContainer, RecipeContainerWrapper, SearchBar } from './style';
import { useDispatch } from 'react-redux';
import { searchRecipe } from 'redux_config/actions/recipe';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import debounce from 'lodash.debounce';
import { useSelector } from 'react-redux';
import { IState } from 'redux_config/reducers';
import Loader from 'components/loader/loader';

const Homepage = () => {
  // Global variables
  const [searchTerm, setSearchTerm] = useState<string>('');
  const dispatch = useDispatch();
  const searchRecipeActions = bindActionCreators(searchRecipe, dispatch);
  const allRecipe = useSelector((state: IState) => state.recipe.recipeList);
  const isLoading = useSelector((state: IState) => state.recipe.isLoading);

  // Helper Functions
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e?.target?.value);
    searchRecipeActions(searchTerm);
  };

  const debouncedOnChange = debounce(updateQuery, 300);

  console.log(isLoading);

  return (
    <MainContainer>
      <SearchBar
        type="text"
        placeholder="Search Some Cool Recipe"
        onChange={debouncedOnChange}
      />
      <RecipeContainerWrapper>
        {/* If State is In Loading State */}
        {isLoading && <Loader />}

        {/* If No Search Term is There and Data is Empty */}
        {!isLoading && searchTerm !== '' && allRecipe.length === 0 && (
          <div>No Data Found</div>
        )}

        {/* If No Search Term is There and Data is Empty */}
        {!isLoading && searchTerm === '' && allRecipe.length === 0 && (
          <div>Try Some cool Recipe</div>
        )}

        {/* If All Recipe is There */}
        {!isLoading &&
          allRecipe.length > 0 &&
          allRecipe.map((r, index) => {
            return <RecipeContainer key={index} img={r.image} name={r.label} />;
          })}
      </RecipeContainerWrapper>
    </MainContainer>
  );
};

export default Homepage;
