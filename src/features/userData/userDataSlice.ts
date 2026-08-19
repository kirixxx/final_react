import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserProfile {
    name?: string, 
    surname?: string,
    email?: string,
    favorites?: Array<string>
}

interface UserState {
    profile: UserProfile
}

const initialState: UserState =  {
    profile: {},
} 

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserProfile>) => {
            state.profile = action.payload;
        },
        clearUserData: (state) => {
            state.profile = {}
        }
    },
    selectors: {
        selectUserdata: state => state.profile
    }
})

export const { setUserData, clearUserData } = userDataSlice.actions;

export const { selectUserdata } = userDataSlice.selectors;

export default userDataSlice.reducer;