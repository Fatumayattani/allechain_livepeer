import React, { useEffect, useState } from 'react';
import videojs from 'video.js';

const LiveConcerts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = React.useRef(null);
  
  // Use your Playback ID here
  const playbackId = '46eeduidcicwywxy'; 
  // Use the Playback URL from Livepeer Studio
  const playbackUrl = `https://livepeercdn.studio/hl${playbackId}/index.m3u8`; // Corrected Playback URL

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: true,
      preload: 'auto',
      sources: [
        {
          src: playbackUrl, // Set the correct Playback URL here
          type: 'application/x-mpegURL',
        },
      ],
    });

    console.log('Player initialized:', player); // Check if player is initialized

    player.on('error', (err) => {
      setError('Error loading video: ' + err.message);
    });

    setLoading(false);

    return () => {
      if (player) {
        player.dispose(); // Clean up on component unmount
      }
    };
  }, [playbackUrl]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Live Concerts</h1>
      {loading ? (
        <p className="font-light">Loading livestream...</p>
      ) : error ? (
        <p className="font-light text-red-500">{error}</p>
      ) : (
        <div className="my-4">
          <h2 className="text-xl">Live Stream</h2>
          <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveConcerts;
