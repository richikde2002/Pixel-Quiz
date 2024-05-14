import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLogo from '/Google Logo.png';
import WelcomeScreenPoster from '/Welcome Screen Poster.png';
import ImageLoader from '../Components/ImageLoader';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-start items-center">
      <header className='w-full py-2 gap-2 flex flex-col'>
        <div className='w-full max-w-2xl mx-auto'>
          <ImageLoader src={WelcomeScreenPoster} />
        </div>
      </header>
      <main>
        <div className='max-w-2xl px-4 mx-auto mt-6 text-center flex flex-col gap-0.5 justify-center items-center'>
          <img src={GoogleLogo} alt="" className='h-5 w-5' />
          <h2 className='font-semibold text-lg'>Welcome to</h2>
          <h1 className='font-bold text-xl'>Pixel Quiz Challenge</h1>
          <p className='text-sm text-zinc-600 mt-3'>Play Pixel Quiz Challenge and win coupons and many more rewards...</p>
        </div>

        <div className='max-w-2xl px-4 mx-auto mt-10 text-center'>
          <p className='text-xs text-zinc-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae molestias voluptatum iste, dolorum tenetur,
            <span className='text-[#4285F4]'>qui temporibus provident quis</span>
          </p>
          <button onClick={() => navigate("/quiz")} className="bg-[#4285F4] rounded-full w-full mt-4 shadow-md text-white pt-2 pb-3 font-medium">
            Start Playing
          </button>
        </div>
      </main>
    </div>
  )
}

export default HomePage