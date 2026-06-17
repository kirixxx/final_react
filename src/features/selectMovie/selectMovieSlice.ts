import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MovieType } from "../../api/Movie";


interface MovieState {
    movie: MovieType | null;
}
const initialState: MovieState = {
    movie: null,
}

const selectMovieSlice = createSlice({
    name: "selectMovie",
    initialState,
    reducers: {
        setSelectMovie: (state, action: PayloadAction<MovieType>) => {
            state.movie = action.payload;
            console.log('добавлен state', state.movie)
        },
        clearSelectMovie: (state) => {
            state.movie = null;
        },
    },
    selectors: {
        selectMovie: state => state.movie
    }
});

export const { setSelectMovie, clearSelectMovie } = selectMovieSlice.actions;
export const { selectMovie } = selectMovieSlice.selectors;

export default selectMovieSlice.reducer;