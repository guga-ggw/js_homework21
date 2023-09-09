import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todoReducer } from './todo/reducers';

const rootReducer = combineReducers({
    todo: todoReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store