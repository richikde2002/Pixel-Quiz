import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { QuizNavbar } from '../Components';
import GoogleLogo from '/Google Logo.png';
import CongoCard from '/Congo Card.png'
import { IoIosArrowForward } from "react-icons/io";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const ResultPage = () => {
  const correctAnswers = useSelector((state) => state.quiz.correct);
  const attemptedAnswers = useSelector((state) => state.quiz.attempted);

  const navigate = useNavigate();

  const query = useQuery();

  const handleClick = () => {

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gcptest.testexperience.site/getContestRewards_testing', {
          params: {
            contest_id: query.get("contest_id"),
            territory_id: query.get("territory_id"),
            user_points: query.get("user_points")
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full min-h-screen relative bg-slate-50'>
      <QuizNavbar className="fixed top-0" />
      <div className='w-full h-full absolute top-0 left-0 bg-black opacity-30 z-10'></div>

      <div className='h-80 w-80 rounded-xl absolute top-[10%] left-[50%] translate-x-[-50%] z-50'>
        <img src={CongoCard} className='object-cover' />
      </div>

      <div className='w-full absolute bottom-0 flex flex-col justify-center items-center z-50 bg-white px-4 pt-4 rounded-t-2xl'>
        <div className='w-full flex justify-start items-center gap-3'>
          <div className='border-[1px] p-1.5 rounded-full'>
            <img src={GoogleLogo} alt="Google" className='w-7 h-7' />
          </div>
          <h2 className='font-medium text-xl'>Pixel Quiz</h2>
        </div>

        <div className='mt-4'>
          <h1 className='text-2xl font-medium'>+80 Points</h1>
          <p className='text-sm font-medium mt-1'>You earned 80 points, redeem them in store.</p>
        </div>

        <div className='my-10'>
          <button 
            className='bg-[#4285F4] text-white font-medium px-5 py-3 rounded-xl flex justify-center items-center gap-2'
            onClick={handleClick}
          >
            Back to Home
            <IoIosArrowForward size={16} />
          </button>
        </div>
      </div>
    </div>
    //   <p className='bg-white rounded-full px-4 py-2 shadow-md'>Correct: {correctAnswers}</p>
    //   <p className='bg-white rounded-full px-4 py-2 shadow-md'>Attempted: {attemptedAnswers}</p>
    //   <p onClick={() => navigate("/")} className='bg-white rounded-full px-4 py-2 shadow-md'>Retake the Quiz ?</p>
    // </div>
  );
}

export default ResultPage