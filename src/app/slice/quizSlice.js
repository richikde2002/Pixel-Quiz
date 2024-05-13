import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 1,
}

export const quizSlice = createSlice({
    name: 'quiz',
    reducers: {
        nextQuestion: (state) => {
            state.index++;
        }
    },
});

export const { nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;