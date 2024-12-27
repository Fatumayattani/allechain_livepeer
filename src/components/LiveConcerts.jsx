import React, { useState } from "react";
import ReactPlayer from "react-player"; // For playing livestreams
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

const LiveConcerts = () => {
  // Livestream state (initial hardcoded streams)
  const [streams, setStreams] = useState([
    {
      id: 1,
      name: "Live Concert A",
      playbackId: "7462cm47zafd3mwi", // Replace with actual playbackId
    },
    {
      id: 2,
      name: "Live Concert B",
      playbackId: "anotherPlaybackId", // Replace with actual playbackId
    },
  ]);

  // Function to simulate starting a new livestream
  const startNewStream = () => {
    const newStream = {
      id: streams.length + 1,
      name: `New Live Concert ${streams.length + 1}`,
      playbackId: `simulatedPlaybackId${streams.length + 1}`, // Simulated playbackId
    };

    setStreams((prevStreams) => [...prevStreams, newStream]); // Add new stream
    alert(`New Livestream Started: ${newStream.name}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Live Concerts</h1>

      {/* Start New Livestream Button */}
      <button
        onClick={startNewStream}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-200 mb-8"
      >
        Start New Livestream
      </button>

      {/* Livestreams Section */}
      <div className="space-y-8">
        {streams.map((stream) => (
          <div
            key={stream.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {stream.name}
            </h2>

            {/* Livestream Player */}
            <ReactPlayer
              url={`https://livepeercdn.studio/hls/${stream.playbackId}/index.m3u8`}
              controls
              width="80%"
              height="360px"
              className="rounded-lg overflow-hidden"
            />

            {/* Broadcast Link */}
            <a
              href={`https://lvpr.tv/broadcast/${stream.playbackId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              Watch Broadcast
            </a>
          </div>
        ))}
      </div>

      {/* Concerts List */}
      <div className="my-12">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Previous Concerts
        </h1>
        <div className="flex space-x-4 overflow-auto">
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

