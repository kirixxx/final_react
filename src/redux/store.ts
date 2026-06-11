import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authModalReducer from "../features/authModal/authModalSlice";

const rootReducer = combineReducers({
    authModal: authModalReducer,
});

export const store = configureStore({
    reducer: {
        authModal: authModalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;