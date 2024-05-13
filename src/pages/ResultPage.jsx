import React from 'react'
import { useSelector } from 'react-redux'

const ResultPage = () => {
    const correctAnswers = useSelector((state) => state.quiz.correct);

  return (
    <div>Correct: {correctAnswers}</div>
  )
}

export default ResultPage