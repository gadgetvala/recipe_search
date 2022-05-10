import * as api from 'api/food_api';
import { Dispatch } from 'redux';
import { SearchFoodType } from 'redux_config/actions_types';
import {
  ISearchFoodAction,
  ISearchFoodLoadingAction,
} from 'interfaces/actions/recipe';
import { IRoot, IRecipe } from 'interfaces/api/response/iRecipe';

export const searchRecipe =
  (searchTerm: string) =>
  async (dispatch: Dispatch<ISearchFoodAction | ISearchFoodLoadingAction>) => {
    try {
      dispatch({ type: SearchFoodType.UPDATE_LOADING, payload: true });

      // Call API
      const { data } = await api.searchFood(searchTerm);

      let modeledData: IRecipe[] = [];
      if (data.hits.length) {
        data.hits.forEach((e: IRoot) => {
          if (e.hasOwnProperty('recipe')) {
            modeledData.push(e['recipe']);
          }
        });
      }

      // Build Dispatch
      dispatch({ type: SearchFoodType.SEARCH, payload: modeledData });
      dispatch({ type: SearchFoodType.UPDATE_LOADING, payload: false });
    } catch (err) {
      console.log(err);
      dispatch({ type: SearchFoodType.UPDATE_LOADING, payload: false });
    }
  };

export const updateLoading =
  (payload: boolean) => (dispatch: Dispatch<ISearchFoodLoadingAction>) => {
    dispatch({ type: SearchFoodType.UPDATE_LOADING, payload: payload });
  };
