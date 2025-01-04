import React from 'react'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import {nftData} from '../assets/assets'

const Music = () => {
  return (
    <div>
      <h1>Music Page</h1>

      {/* Albums Section */}
      <div className="my-12 px-7">
        <h1 className="text-3xl font-bold mb-6 text-white px-7">
          Latest Music
        </h1>
        <div className="flex space-x-4 overflow-auto px-7">
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

      {/* Music NFTs Section */}
      <div className="my-12 px-7">
        <h1 className="text-3xl font-bold mb-6 text-white px-7">
          Music NFTs
        </h1>
        <div className="flex space-x-4 overflow-auto justify-items-center">
          {nftData.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-sm font-semibold text-white mb-2">{item.name}</h2>
              <p className="text-yellow-500 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;

