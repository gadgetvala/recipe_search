import { combineReducers } from 'redux';
import recipe from './recipe';

const reducers = combineReducers({
  recipe,
});

export default reducers;

export type IState = ReturnType<typeof reducers>;
