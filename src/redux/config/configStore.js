import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from '../modules/todo';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const postPersistedReducer = persistReducer(persistConfig, todoReducer);

const rootReducer = combineReducers({
  todoReducer: postPersistedReducer,
});

const store = createStore(rootReducer);

export default store;
