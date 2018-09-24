import { combineReducers } from 'redux';
import { drizzleReducers } from 'drizzle';

export const initialState = { valor: 1000 };

const app = (state = initialState, action) => {
  return state;
};

const reducer = combineReducers({
  app,
  ...drizzleReducers
});

export default reducer;
