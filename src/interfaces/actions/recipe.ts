import { SearchFoodType } from 'redux_config/actions_types';
import { IRecipe } from 'interfaces/api/response/iRecipe';

export interface ISearchFoodAction {
  type: SearchFoodType.SEARCH;
  payload: IRecipe[];
}

export interface ISearchFoodLoadingAction {
  type: SearchFoodType.UPDATE_LOADING;
  payload: boolean;
}

export type RecipeAction = ISearchFoodAction | ISearchFoodLoadingAction;
