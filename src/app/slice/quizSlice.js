import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    index: 1,
    correct: 0,
    attempted: 0,
    unattempted: 0,
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        nextQuestion: (state) => {
            state.index += 1;
        },
        addCorrect: (state) => {
            state.correct += 1;
        },
        addAttempted: (state) => {
            state.attempted += 1;
        },
        addUnattempted: (state) => {
            state.unattempted += 1;
        },
    },
});

export const { nextQuestion, addCorrect, addAttempted, addUnattempted } = quizSlice.actions;

export default quizSlice.reducer;