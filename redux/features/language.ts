import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState;
};

type AuthState = {
    languageName: string,
}


const initialState = {
    value: {
        languageName: "english"
    } as AuthState,
} as InitialState;

export const language = createSlice({
    name: "language",
    initialState,
    reducers: {
        // toogle
        // changeLanguage: (state) => {
        //     state.value.isModerator = !state.value.isModerator
        // }
        changeLanguage: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    languageName: action.payload
                }
            }
        }    
    }
});

export const { changeLanguage } = language.actions;
export default language.reducer;