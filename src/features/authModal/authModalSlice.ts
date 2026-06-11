import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
    name: "authModal",
    initialState: { isOpen: false },
    reducers: {
        openAuthModal: (state) => {
            state.isOpen = true;
        },
        closeAuthModal: (state) => {
            state.isOpen = false;
        },
    },
    selectors: {
        selectAuthModal: modal => modal.isOpen
    }
})

export const { openAuthModal, closeAuthModal } = authModalSlice.actions;

export const { selectAuthModal } = authModalSlice.selectors;

export default authModalSlice.reducer;