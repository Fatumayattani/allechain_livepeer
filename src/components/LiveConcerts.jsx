import React from 'react';
import LivestreamPlayer from './LivestreamPlayer';
import Chat from './Chat';
import StreamInfo from './StreamInfo';

function LiveConcerts() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-7xl mt-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="col-span-3">
            <LivestreamPlayer streamUrl="https://lvpr.tv/broadcast/6858-2zye-gsmc-oas7" />
            <StreamInfo />
          </div>
          <div className="col-span-2">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveConcerts;


