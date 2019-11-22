import { combineReducers, createStore, applyMiddleware } from 'redux'
import { auth } from './reducers/auth.reducer';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  auth
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppState = ReturnType<typeof rootReducer>