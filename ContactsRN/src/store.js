import { createStore, combineReducers } from "redux";
import usuarioReducer from './reducers/usuarioReducer'

const rootReducer = combineReducers({
    usuarioReducer: usuarioReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;