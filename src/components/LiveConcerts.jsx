import React, { useEffect, useState } from 'react'

const LiveConcerts = () => {
  const [stream, setStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStreamDetails = async () => {
      try {
        // Assuming you already have the Playback ID
        const playbackId = 'YOUR_PLAYBACK_ID'; // Replace with your actual Playback ID
        setStream({ playbackId });
      } catch (err) {
        setError('Error fetching stream: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStreamDetails();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Live Concerts</h1>
      {loading ? (
        <p className="font-light">Loading livestream...</p>
      ) : error ? (
        <p className="font-light text-red-500">{error}</p>
      ) : (
        <div>
          {stream && (
            <div className="my-4">
              <h2 className="text-xl">Live Stream</h2>
              <iframe
                src={`https://livepeercdn.com/hls/${stream.playbackId}/index.m3u8`}
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                title="Live Stream"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveConcerts