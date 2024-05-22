import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './slice/quizSlice';
import questionReducer from './slice/questionSlice';

export const store = configureStore({
    reducer: {
        quiz: quizReducer,
        question: questionReducer,
    },
});