import { vote } from './modules/vote/vote.reducer';
import { series } from './modules/serie/series.reducer'
import { serieCast } from './modules/serieCast/serieCast.reducer';
import { serieVideo } from './modules/serieVideo/serieVideo.reducer';
import { serie } from './modules/serie/serie.reducer';
import { catSerie } from './modules/catSerie/catSerie.reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { auth } from './modules/auth/auth.reducer';
import { user, users } from './modules/user/user.reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  auth,
  catSerie,
  serie,
  serieCast,
  serieVideo,
  user,
  users,
  vote,
  series
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppState = ReturnType<typeof rootReducer>