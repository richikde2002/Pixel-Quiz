import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLogo from '/Google Logo.png';
import WelcomeScreenPoster from '/Welcome Screen Poster.png';
import ImageLoader from '../Components/ImageLoader';
import axios from 'axios';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const contest_id = 1;
const territory_id = "NewYork, NY";

const HomePage = () => {
  const navigate = useNavigate();

  const [territory, setTerritory] = useState('');

  const handleChange = (event) => {
    setTerritory(event.target.value);
  };

  return (
    <div className="bg-white min-h-screen w-full flex flex-col justify-start items-center">
      <header className='w-full py-2 gap-2 flex flex-col'>
        <div className='w-full max-w-2xl mx-auto'>
          <ImageLoader src={WelcomeScreenPoster} />
        </div>
      </header>
      <main>
        <div className='max-w-2xl px-4 mx-auto mt-6 text-center flex flex-col gap-0.5 justify-center items-center'>
          <img src={GoogleLogo} alt="" className='h-5 w-5 md:h-8 md:w-8' />
          <h2 className='font-semibold text-xl sm:text-2xl md:text-4xl mt-2'>Welcome to</h2>
          <h1 className='font-semibold text-2xl sm:text-3xl md:text-5xl -mt-0.5'>Pixel Quiz Challenge</h1>
          <p className='font-medium text-sm md:text-xl text-zinc-600 mt-3 leading-tight'>Play Pixel Quiz Challenge and win coupons and many more rewards...</p>
        </div>

        {/* <div className='w-full max-w-md px-4 mx-auto mt-4'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Territory</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={territory}
              label="Territory"
              onChange={handleChange}
            >
              <MenuItem value={"NY"}>New York</MenuItem>
              <MenuItem value={"IN"}>India, IN</MenuItem>
              <MenuItem value={"LD"}>London, LD</MenuItem>
            </Select>
          </FormControl>
        </div> */}

        <div className='max-w-2xl px-4 mx-auto mt-10 text-center'>
          <p className='text-xs md:text-lg tracking-tight leading-tight text-zinc-500 text-left'>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. quent per conubia nostra, per inceptos himenaeos
            <span className='text-[#4285F4]'>qui temporibus provident quis</span>
          </p>
          <button
            onClick={() => navigate(`/quiz?territory_id=${territory_id}&contest_id=${contest_id}`)}
            className="bg-[#4285F4] rounded-full w-full mt-4 md:mt-8 shadow-md text-white py-4 md:py-6 font-medium sm:text-3xl"
          >
            Start Playing
          </button>
        </div>
      </main>
    </div>
  )
}

export default HomePage