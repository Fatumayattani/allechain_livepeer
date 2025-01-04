import React, { useState } from 'react';
import { Play, Pause, Users, Heart, Share2 } from 'lucide-react';

function LivestreamPlayer({ streamUrl }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewers, setViewers] = useState(1234);
  const [likes, setLikes] = useState(856);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe 
        src={streamUrl}
        className={`w-full h-full ${!isPlaying ? 'hidden' : ''}`}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      
      {!isPlaying && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&w=1200&q=80"
            alt="Stream Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <h2 className="text-white text-2xl font-bold z-10">Stream Paused</h2>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isPlaying ? <Pause className="text-white" /> : <Play className="text-white" />}
            </button>
            
            <div className="flex items-center gap-2 text-white">
              <Users size={18} />
              <span>{viewers.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLikes(prev => prev + 1)}
              className="flex items-center gap-1 text-white hover:text-pink-500 transition-colors"
            >
              <Heart size={18} />
              <span>{likes.toLocaleString()}</span>
            </button>
            <button className="text-white hover:text-blue-400 transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivestreamPlayer;
