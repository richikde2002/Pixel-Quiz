import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { fetchQuizData } from '../app/slice/quizSlice';
import { Loader } from '../Components';
import GoogleLogo from '/Google Logo.png';
import WelcomeScreenPoster from '/Welcome Screen Poster.png';

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
    <div className="bg-white min-h-screen w-full flex flex-col justify-start items-center">
      <header className='w-full py-2 gap-2 flex flex-col'>
        <div className='w-full flex justify-center items-center py-2'>
          <img src={GoogleLogo} alt="" className='h-5 w-5' />
          <h1 className='text-xl font-semibold'>Challenges</h1>
        </div>
        <img src={WelcomeScreenPoster} className='w-full max-w-lg mx-auto' />
      </header>
      <main>
        <div className='max-w-lg px-4 mx-auto mt-6 text-center flex flex-col gap-0.5 justify-center items-center'>
          <img src={GoogleLogo} alt="" className='h-5 w-5' />
          <h2 className='font-semibold text-lg'>Welcome to</h2>
          <h1 className='font-bold text-xl'>Pixel Quiz Challenge</h1>
          <p className='text-sm text-zinc-600 mt-3'>Play Pixel Quiz Challenge and win coupons and many more rewards...</p>
        </div>

        <div className='max-w-lg px-4 mx-auto mt-10 text-center'>
          <p className='text-xs text-zinc-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias voluptatum iste, dolorum tenetur,
            <span className='text-[#4285F4]'>qui temporibus provident quis</span>
          </p>
          <button onClick={handleStart} to="/quiz" className="bg-[#4285F4] rounded-full w-full mt-4 shadow-md text-white pt-2 pb-3 font-medium">
            Start Playing
          </button>
        </div>
      </main>
    </div>
  )
}

export default HomePage