import { vote } from './modules/vote/vote.reducer';
import { serieVideo } from './modules/serieVideo/serieVideo.reducer';
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
  serieVideo,
  user,
  vote
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppState = ReturnType<typeof rootReducer>