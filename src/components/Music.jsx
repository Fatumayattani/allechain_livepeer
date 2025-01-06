import React, { useState, useRef } from 'react';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { nftData } from '../assets/assets';

const Music = () => {
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
      {/* Left Side with Music Player and Poll */}
      <div className="w-1/5 border-r border-gray-700 p-4 flex flex-col items-center mt-8">
        <h2 className="text-xl font-bold mb-4 text-center text-orange-500">Now Playing</h2>

        {/* Music Player */}
        <div className="w-full bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
          <div className="w-full">
            <audio ref={audioRef} className="w-full rounded-md mb-4" controls>
              <source src="/music_sample.mp3" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <h3 className="text-sm font-bold mb-4 text-center text-white">Track Title</h3>
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
          <h3 className="text-xl font-bold text-center text-orange-500 mb-4">Poll: What's your favorite music genre?</h3>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleVote('Rock')}
              className={`${
                vote === 'Rock' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
              Rock
            </button>
            <button
              onClick={() => handleVote('Pop')}
              className={`${
                vote === 'Pop' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
              Pop
            </button>
            <button
              onClick={() => handleVote('Hip Hop')}
              className={`${
                vote === 'Hip Hop' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
              Hip Hop
            </button>
            <button
              onClick={() => handleVote('Jazz')}
              className={`${
                vote === 'Jazz' ? 'bg-orange-500' : 'bg-gray-700'
              } text-white p-3 rounded-lg hover:bg-orange-400 transition duration-300`}
            >
              Jazz
            </button>
            {vote && (
              <p className="mt-4 text-center text-white">
                You voted: <span className="font-semibold text-orange-500">{vote}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Side with Music NFTs Section */}
      <div className="w-4/5 p-8">
        {/* Music NFTs Section */}
        <div className="my-12 px-7">
          <h2 className="text-3xl font-bold mb-6 text-white">Music NFTs</h2>
          <div className="flex space-x-4 overflow-auto justify-items-center">
            {nftData.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
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

