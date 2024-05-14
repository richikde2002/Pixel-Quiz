import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { fetchQuizData } from '../app/slice/quizSlice';
import { Loader } from '../Components';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.quiz.status);

  const handleStart = () => {
    dispatch(fetchQuizData());
  }
  
  if (status === "loading") {
    return <Loader />
  } else if (status === "succeeded") {
    navigate("/quiz");
  } else if (status === "failed") {
    return <p>Error...</p>
  }
  
  return (
    <div className="bg-white min-h-screen w-full flex justify-center items-center">
      <button onClick={handleStart} to="/quiz" className="bg-white rounded-full px-4 py-2 shadow-md">
        Start Quiz
      </button>
    </div>
  )
}

export default HomePage