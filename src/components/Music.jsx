import React, { useState, useRef } from 'react';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { nftData, musicData } from '../assets/assets';

const Music = () => {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false);

  // Handle play, pause, and stop functionalities
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side with Music Player and Staking Section */}
      <div className="w-1/5 border-r border-gray-700 p-4 flex flex-col items-center mt-8">
        <h2 className="text-xl font-bold mb-4 text-center text-orange-500">Now Playing</h2>

        {/* Music Player */}
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <div className="w-full">
            <audio ref={audioRef} className="w-full rounded-md mb-4" controls>
              <source src="/pop.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <h3 className="text-sm font-bold mb-4 text-center text-white">Finding My Way</h3>
          <div className="flex space-x-6">
            <button
              className={`${
                isPlaying ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-full hover:bg-orange-400 transition duration-300`}
              onClick={handlePlayPause}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              className="bg-red-500 text-white p-3 rounded-full hover:bg-red-400 transition duration-300"
              onClick={handleStop}
            >
              Stop
            </button>
          </div>
        </div>

        {/* Music NFT Staking Section */}
        <div className="mt-16 w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-center text-orange-500 mb-4">
            Stake Your Music NFTs
          </h3>
          <p className="text-gray-400 text-center mb-4">
            Lock in your music NFTs and earn rewards or exclusive perks!
          </p>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-gray-700 text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300"
            >
              View Staking Benefits
            </button>
            <button
              className="bg-gray-700 text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300"
            >
              Stake Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Side with Albums and Music NFTs Sections */}
      <div className="w-4/5 p-8">
        {/* Albums Section */}
        <div className="my-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Latest Music</h2>
          <div className="flex space-x-4 overflow-auto">
            {musicData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Music NFTs Section */}
        <div className="my-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Music NFTs</h2>
          <div className="flex space-x-4 overflow-auto">
            {nftData.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg w-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-sm font-semibold text-white mb-2">{item.name}</h2>
                <p className="text-yellow-500 font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
