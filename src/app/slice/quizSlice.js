import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 1,
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        nextQuestion: (state) => {
            state.index += 1;
        }
    },
});

export const { nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;