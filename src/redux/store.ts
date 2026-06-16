import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authModalReducer from "../features/authModal/authModalSlice";
import userDataReducer from "../features/userData/userDataSlice";

// const rootReducer = combineReducers({
//     authModal: authModalReducer,
//     userData: userDataReducer,
// });

export const store = configureStore({
    reducer: {
        authModal: authModalReducer,
        userData: userDataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;