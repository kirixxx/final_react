import { configureStore } from "@reduxjs/toolkit";
import authModalReducer from "../features/authModal/authModalSlice";
import userDataReducer from "../features/userData/userDataSlice";
import selectMovieReducer from "../features/selectMovie/selectMovieSlice";


// const rootReducer = combineReducers({
//     authModal: authModalReducer,
//     userData: userDataReducer,
// });

export const store = configureStore({
    reducer: {
        authModal: authModalReducer,
        userData: userDataReducer,
        selectMovie: selectMovieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;