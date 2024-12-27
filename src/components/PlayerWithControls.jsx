import React, { useRef, useState } from 'react';

const PlayerWithControls = ({ src, title }) => {
  const videoRef = useRef(null);  // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // Play/Pause state
  const [volume, setVolume] = useState(1); // Volume state (0 to 1)

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    videoRef.current.volume = e.target.value;
  };

  return (
    <div className="video-container">
      <h3 className="text-xl mb-2">{title}</h3>
      <video
        ref={videoRef}
        width="100%"
        controls={false} // Disable default controls since we are adding custom ones
        src={src}
        title={title}
      />
      <div className="controls mt-2 flex items-center justify-between">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className={`p-2 ${isPlaying ? 'bg-red-500' : 'bg-green-500'} text-white`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {/* Volume Control */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24"
        />
      </div>
    </div>
  );
};

export default PlayerWithControls;
