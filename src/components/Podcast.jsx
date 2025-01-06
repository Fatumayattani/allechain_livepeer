import React from 'react';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { nftData } from '../assets/assets';

const Podcast = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Left Side with a Separator */}
      <div className="w-1/5 border-r border-gray-700"></div>

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

