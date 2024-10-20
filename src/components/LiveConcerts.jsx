import React, { useEffect, useState } from 'react'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

const LiveConcerts = () => {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // For demonstration purposes, we're using hardcoded data.
    // You can replace this with your API fetch call if needed.
    const fetchStreams = () => {
      const streamData = [
        {
          id: '46eeduidcicwywxy',
          name: 'Live Concert Stream',
          embedUrl: 'https://lvpr.tv?v=46eeduidcicwywxy'
        }
      ];
      setStreams(streamData);
      setLoading(false);
    };

    fetchStreams();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Live Concerts</h1>
      {loading ? (
        <p className="font-light">Loading livestreams...</p>
      ) : error ? (
        <p className="font-light text-red-500">{error}</p>
      ) : (
        <div>
          {streams.map((stream) => (
            <div key={stream.id} className="my-4">
              <h2 className="text-xl">{stream.name}</h2>
              <iframe
                src={stream.embedUrl} // Using the embed URL here
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title={stream.name}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

<div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>African Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />)) }

        </div>
      </div>

export default LiveConcerts

