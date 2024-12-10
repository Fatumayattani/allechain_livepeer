import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const LiveConcerts = () => {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newStream, setNewStream] = useState(null);

  const apiKey = import.meta.env.VITE_LIVEPEER_API_KEY;

  // Fetch existing streams on component load
  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await axios.get('https://livepeer.studio/api/stream', {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        setStreams(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load livestreams.');
        setLoading(false);
      }
    };

    fetchStreams();
  }, [apiKey]);

  // Create a new livestream
  const createStream = async () => {
    try {
      const response = await axios.post(
        'https://livepeer.studio/api/stream',
        { name: 'New Live Concert Stream', record: true },
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      setNewStream(response.data);
      alert('Stream created! Stream ID: ' + response.data.id);
    } catch (err) {
      console.error(err);
      setError('Failed to create stream.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Live Concerts</h1>

      {/* Button to Create a New Livestream */}
      <button
        onClick={createStream}
        className="bg-blue-500 text-white px-4 py-2 rounded my-4"
      >
        Create New Livestream
      </button>

      {/* Livestreams Section */}
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
                src={`https://lvpr.tv?v=${stream.playbackId}`} // Use playbackId
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

      {/* Concerts List */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Previous Concerts</h1>
        <div className="flex overflow-auto">
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
  );
};

export default LiveConcerts;
