import React from 'react'
import { useSelector } from 'react-redux'

const ResultPage = () => {
  const correctAnswers = useSelector((state) => state.quiz.correct);
  const attemptedAnswers = useSelector((state) => state.quiz.attempted);

  return (
    <div className='bg-white min-h-screen w-full flex flex-col gap-2 justify-center items-center'>
      <p className='bg-white rounded-full px-4 py-2 shadow-md'>Correct: {correctAnswers}</p>
      <p className='bg-white rounded-full px-4 py-2 shadow-md'>Attempted: {attemptedAnswers}</p>
    </div>
  )
}

export default ResultPage