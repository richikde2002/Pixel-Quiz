import React from 'react';
import QuizNavbar from '../Components/QuizNavbar';
import Timer from '../Components/Timer';
import GoogleAILogo from "/Google AI Logo.png";
import { FaCheck, FaXmark } from "react-icons/fa6";

const QuizPage = () => {
  return (
    <div className='w-full min-h-screen bg-slate-50'>
      <QuizNavbar />
      <main className='w-full h-full mt-6 max-w-2xl mx-auto px-4 sm:px-6 md:px-8'>
          
        <div className='relative my-8'>
          <div className='absolute left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <Timer />
          </div>
          <img src={GoogleAILogo} alt="Gooogle AI" className='border-2 rounded-xl' />
        </div>

        <div className='flex flex-col gap-2 mt-2'>
          <div className='flex justify-between font-medium text-slate-400'>
            <p className='text-sm'>2/10</p>
            <p className='text-sm'>(10 Points)</p>
          </div>

          <p className='font-semibold text-center my-2'>
            Name Googles AI model which powers most AI smartphones including Pixel and Samsung.
          </p>

          <form className='flex flex-col gap-2.5 justify-start items-start w-full'>
            <button className='w-full flex px-3 py-1'>
              <p>
                <span className='font-bold'>A.</span> Aplha+
              </p>
            </button>
            <button className='w-full flex px-3 py-1 justify-between items-center border-green-500 border-2 rounded-lg bg-gradient-to-b from-green-100 via-green-100 to-transparent'>
              <p>
                <span className='font-bold'>B.</span> Chat GPT
              </p>
              <div className='bg-green-500 rounded-full p-1'>
                <FaCheck color='white' />
              </div>
            </button>
            <button className='w-full flex px-3 py-1 justify-between items-center border-red-500 border-2 rounded-lg bg-gradient-to-b from-red-100 via-red-100 to-transparent'>
              <p>
                <span className='font-bold'>C.</span> Google Gemini
              </p>
              <div className='bg-red-500 rounded-full p-1'>
                <FaXmark color='white' />
              </div>
            </button>
            <button className='w-full flex px-3 py-1'>
              <p>
                <span className='font-bold'>D.</span> Google Bard
              </p>
            </button>
          </form>

          <button className='bg-gray-100 mx-auto text-sm px-5 py-2 rounded-full shadow-lg'>
            Skip to Next
          </button>
        </div>
      </main>
    </div>
  )
}

export default QuizPage