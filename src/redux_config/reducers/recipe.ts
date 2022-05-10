import { RecipeAction } from 'interfaces/actions/recipe';
import { SearchFoodType } from 'redux_config/actions_types';
import { IRecipe } from 'interfaces/api/response/iRecipe';

interface IRecipeState {
  isLoading: boolean;
  recipeList: IRecipe[];
}

const default_state: IRecipeState = {
  isLoading: false,
  recipeList: [],
};

const reducers = (
  state: IRecipeState = default_state,
  action: RecipeAction
) => {
  switch (action.type) {
    case SearchFoodType.SEARCH:
      return { ...state, recipeList: [...action.payload] };
    case SearchFoodType.UPDATE_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default reducers;
