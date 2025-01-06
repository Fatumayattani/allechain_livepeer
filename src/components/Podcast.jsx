import React, { useState, useRef } from 'react';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { nftData } from '../assets/assets';

const Podcast = () => {
  const audioRef = useRef(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(false);
  const [vote, setVote] = useState(null); // To store poll vote

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

  // Handle poll vote
  const handleVote = (choice) => {
    setVote(choice);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side with a Separator */}
      <div className="w-1/5 border-r border-gray-700 p-4 flex flex-col items-center mt-8">
        <h2 className="text-xl font-bold mb-4 text-center text-orange-500">Now Playing</h2>

        {/* Custom Audio Player */}
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          {/* Audio Element */}
          <div className="w-full">
            <audio ref={audioRef} className="w-full rounded-md mb-4" controls>
              <source src="/pod.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          </div>

          {/* Custom Play/Pause and Stop Buttons */}
          <h3 className="text-sm font-bold mb-4 text-center text-white">AI meets Livepeer</h3>
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

        {/* Poll Section */}
        <div className="mt-16 w-full bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-center text-orange-500 mb-4">Poll: What do you think about AI?</h3>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleVote('Exciting')}
              className={`${
                vote === 'Exciting' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
            Exciting Potential
            </button>
            <button
              onClick={() => handleVote('Useful')}
              className={`${
                vote === 'Useful' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
            Very Useful
            </button>
            <button
              onClick={() => handleVote('Scary')}
              className={`${
                vote === 'Scary' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
              Scary and unpredictable
            </button>
            <button
              onClick={() => handleVote('Uncertain')}
              className={`${
                vote === 'Uncertain' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
              Not sure, it has pros and cons
            </button>
            {vote && (
              <p className="mt-4 text-center text-white">
                You voted: <span className="font-semibold text-orange-500">{vote}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-4/5 p-8">
        {/* Music NFTs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white">Latest Podcast</h2>
          <div className="flex space-x-4 overflow-auto">
            {nftData.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-sm font-semibold mb-2 text-white">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Podcast Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white">Previous Podcasts</h2>
          <div className="flex space-x-4 overflow-auto">
            {albumsData.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Podcast;


