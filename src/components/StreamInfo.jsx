import React, { useState, useEffect } from 'react';
import { Clock, Users } from 'lucide-react';

function StreamInfo() {
  const [duration, setDuration] = useState('00:05:15');

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = duration.split(':').map(Number);
      let newSeconds = seconds + 1;
      let newMinutes = minutes;
      let newHours = hours;

      if (newSeconds >= 60) {
        newSeconds = 0;
        newMinutes++;
      }
      if (newMinutes >= 60) {
        newMinutes = 0;
        newHours++;
      }

      setDuration(
        `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [duration]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4">🎥 Live: AlleChain Demo</h1>

      <div className="flex items-center gap-6 text-gray-600">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={18} />
          <span>1 watching</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">
        Welcome to the Prototype Showcase for Livepeer.
        </p>
      </div>
    </div>
  );
}

export default StreamInfo;
