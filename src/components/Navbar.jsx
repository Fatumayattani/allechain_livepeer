import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Functions to handle navigation
  const navigateToMusic = () => {
    navigate('/music');  // Navigate to Music
  };

  const navigateToPodcast = () => {
    navigate('/podcast');  // Navigate to Podcast
  };

  const navigateToLivestream = () => {
    navigate('/live-concerts');  // Navigate to Live Concerts (Livestream)
  };

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
          <img
            onClick={() => navigate(-1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_left}
            alt="Back"
          />
          <img
            onClick={() => navigate(1)}
            className='w-8 bg-black p-2 rounded-2xl cursor-pointer'
            src={assets.arrow_right}
            alt="Forward"
          />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-orange-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>
            F
          </p>
        </div>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl'>ALL</p>
        <p
          onClick={navigateToMusic}  // Navigate to Music
          className='bg-black px-4 py-1 rounded-2xl cursor-pointer'
        >
          Music
        </p>
        <p
          onClick={navigateToPodcast}  // Navigate to Podcast
          className='bg-black px-4 py-1 rounded-2xl cursor-pointer'
        >
          Podcast
        </p>
        <p
          onClick={navigateToLivestream}  // Navigate to Livestream (Live Concerts)
          className='bg-black px-4 py-1 rounded-2xl cursor-pointer'
        >
          Livestream
        </p>
      </div>
    </>
  );
};

export default Navbar;
