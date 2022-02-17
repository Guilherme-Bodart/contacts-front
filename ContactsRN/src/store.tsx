import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import usuarioReducer from './reducers/usuarioReducer';

const rootReducer = combineReducers({
    usuarioReducer: usuarioReducer
});

const storeConfig = createStore(rootReducer, applyMiddleware(thunk))

export type Store = ReturnType<typeof rootReducer>

export default storeConfig