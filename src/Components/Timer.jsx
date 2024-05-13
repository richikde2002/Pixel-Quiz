import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import GoogleAILogo from "/Google AI Logo.png";

const Timer = ({ time }) => {
  return (
    <div className='relative my-8'>
      <div className='absolute left-[50%] -translate-x-[50%] -translate-y-[50%]'>
        <div className='bg-white px-3 py-1 border-2 rounded-full flex justify-center items-center gap-2'>
          <MdOutlineTimer className='mt-0.5' />
          <p>00:{String(time).padStart(2, '0')}</p>
        </div>
      </div>
      <img src={GoogleAILogo} alt="Gooogle AI" className='border-2 rounded-xl' />
    </div>
  )
}

export default Timer