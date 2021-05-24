import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

// Middleware :: Redux Persist Config
const persistConfig = {
  key: 'now',
  storage: AsyncStorage,
  whitelist: ['bookmarks, theme, emailNotify, auth'],
  blacklist: ['navigation'],
};

export function logCurrentStorage() {
  AsyncStorage.getAllKeys().then((keyArray) => {
    AsyncStorage.multiGet(keyArray).then((keyValArray) => {
      let myStorage: any = {};
      for (let keyVal of keyValArray) {
        // let persistConfigElement = persistConfig[keyVal];
        myStorage[keyVal[0]] = keyVal[1];
      }
      console.log(' CURRENT STORAGE::: ', myStorage);
    });
  });
}

// logCurrentStorage();

const combined_reducer = combineReducers({
  // user_details: rootReducer.AuthReducer,
  task: rootReducer.TaskReducer,
});

export function newLogCurrentStorage() {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores.map((result, i, store) => {
        console.log({ [store[i][0]]: store[i] });
        return true;
      });
    });
  });
}

const persistedReducer = persistReducer(persistConfig, combined_reducer);
//
export const store = createStore(persistedReducer, applyMiddleware(createLogger()));
//
export let persistor = persistStore(store);
