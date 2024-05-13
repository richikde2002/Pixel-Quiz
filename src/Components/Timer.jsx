import React from 'react'
import { MdOutlineTimer } from "react-icons/md";

const Timer = ({ time }) => {
  return (
    <div className='bg-white px-3 py-1 border-2 rounded-full flex justify-center items-center gap-2'>
        <MdOutlineTimer className='mt-0.5' />
        <p>00:{time}</p>
    </div>
  )
}

export default Timer