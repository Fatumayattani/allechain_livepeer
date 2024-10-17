import React, { useEffect, useState } from 'react';
import { Livepeer } from 'livepeer';

const apiKey = import.meta.env.VITE_LIVEPEER_API_KEY; // Ensure your API key is set in .env file
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

  // Here is your livestream detail
  const livestreamDetails = {
    streamId: "46eee31c-dfa5-4a29-9585-e706dc3d1d0d",
    playbackId: "46eeduidcicwywxy",
    playbackUrl: "https://livepeercdn.studio/hls/46eeduidcicwywxy/index.m3u8",
  };

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
          {/* Displaying the specific livestream details */}
          <h2 className="text-xl mt-4">Current Livestream</h2>
          <div className="my-4">
            <p>Stream ID: {livestreamDetails.streamId}</p>
            <p>Playback ID: {livestreamDetails.playbackId}</p>
            <iframe
              src={livestreamDetails.playbackUrl}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              title="Current Livestream"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveConcerts;
