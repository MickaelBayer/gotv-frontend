import { serie } from './modules/serie/serie.reducer';
import { catSerie } from './modules/catSerie/catSerie.reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { auth } from './modules/auth/auth.reducer';
import { user } from './modules/user/user.reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  auth,
  catSerie,
  serie,
  user
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppState = ReturnType<typeof rootReducer>