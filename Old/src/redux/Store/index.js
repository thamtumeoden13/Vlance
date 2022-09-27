import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../Reducer/index';
import Reactotron from '../../config/ReactotronConfig';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(
  persistedReducer,
  __DEV__
    ? compose(applyMiddleware(thunk), Reactotron?.createEnhancer())
    : compose(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
