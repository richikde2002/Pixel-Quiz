// questionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answered: false,
  currentQuestion: null,
  correctAnswer: '',
  selectedAnswer: '',
  isCorrectAnswer: false,
  remainingTime: 15,
  timer: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setAnswered: (state, action) => {
      state.answered = action.payload;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
    setIsCorrectAnswer: (state, action) => {
      state.isCorrectAnswer = action.payload;
    },
    setRemainingTime: (state, action) => {
      state.remainingTime = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export const {
  setAnswered,
  setCurrentQuestion,
  setCorrectAnswer,
  setSelectedAnswer,
  setIsCorrectAnswer,
  setRemainingTime,
  setTimer
} = questionSlice.actions;

export default questionSlice.reducer;
