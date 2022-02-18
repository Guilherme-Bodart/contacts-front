import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import usuarioReducer from './reducers/usuarioReducer';

const rootReducer = combineReducers({
    usuarioReducer: usuarioReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const storeConfig = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(storeConfig)

export { storeConfig, persistor }

export type Store = ReturnType<typeof rootReducer>

export default storeConfig