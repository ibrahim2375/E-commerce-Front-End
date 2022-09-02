import { createStore, applyMiddleware } from 'redux'
import { allReducers } from './reducers/index'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);
// let store = createStore(allReducers);
let store = createStore(persistedReducer, applyMiddleware());
export const Persistor = persistStore(store)
export default store;
