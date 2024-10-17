
import React, { useEffect, useState } from 'react'
import { Livepeer } from 'livepeer'

const apiKey = import.meta.env.VITE_LIVEPEER_API_KEY;
const livepeer = new Livepeer({ apiKey });

const LiveConcerts = () => {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const response = await livepeer.stream.list(); // Fetch the list of streams
        if (response && response.length > 0) {
          setStreams(response); // Set streams if available
        } else {
          setError("No streams available");
        }
      } catch (err) {
        setError("Error fetching streams: " + err.message);
      } finally {
        setLoading(false); // Set loading to false after the fetch
      }
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
                src={`https://livepeercdn.com/hls/${stream.playbackId}/index.m3u8`}
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

export default LiveConcerts
