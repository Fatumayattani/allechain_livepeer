import React from 'react';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { nftData } from '../assets/assets';

const Podcast = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side: Sound Wave Visualizer */}
      <div className="w-1/5 border-r border-gray-700 bg-gray-900 flex flex-col items-center py-8">
        <h2 className="text-xl font-bold mb-6">Now Playing</h2>
        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mb-6">
          <i className="fas fa-play text-white text-2xl"></i>
        </div>
        <div className="text-gray-300 text-sm text-center mb-6">
          <p className="font-semibold text-white">Episode 42</p>
          <p>The Art of Podcasting</p>
        </div>
        {/* Sound Wave Visualizer */}
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-white rounded animate-pulse"
              style={{
                height: `${Math.random() * 50 + 10}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-4/5 p-8">
        {/* Music NFTs Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-6">Podcast Page</h1>
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

export default Podcast;

