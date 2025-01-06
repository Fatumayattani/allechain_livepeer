import React, { useState, useRef } from 'react'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { nftData } from '../assets/assets'

const Podcast = () => {
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
      {/* Left Side with a Separator */}
      <div className="w-1/5 border-r border-gray-700 p-4 flex flex-col items-center mt-4">
        <h2 className="text-xl font-bold mb-4">Now Playing</h2>

        {/* Audio Player Controls */}
        <audio ref={audioRef} className="w-full mb-6" controls>
          <source src="/pod.wav" type="audio/wav" />
          Your browser does not support the audio element.
        </audio>

        <div className="flex space-x-4">
          <button
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            onClick={handlePlayPause}
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            onClick={handleStop}
          >
            Stop
          </button>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-4/5 p-8">
        {/* Music NFTs Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Latest Podcast</h2>
          <div className="flex space-x-4 overflow-auto">
            {nftData.map((item, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-sm font-semibold mb-2">{item.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Podcast Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Previous Podcasts</h2>
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

export default Podcast
