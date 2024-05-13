import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen w-full flex justify-center items-center">
      <Link to="/quiz" className="bg-white rounded-full px-4 py-2 shadow-md">
        Start Quiz
      </Link>
    </div>
  )
}

export default HomePage