import React from 'react'
import { MdOutlineTimer } from "react-icons/md";

const Timer = () => {
  return (
    <div className='bg-white px-3 py-1 border-2 rounded-full flex justify-center items-center gap-2'>
        <MdOutlineTimer className='mt-0.5' />
        <p>00:05</p>
    </div>
  )
}

export default Timer