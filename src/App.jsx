import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { PlayerContext } from "./context/PlayerContext";
import { ConnectWallet } from "@thirdweb-dev/react";
import { client } from "./client";
import LiveConcerts from "./components/LiveConcerts";  // Import the LiveConcerts component
import Music from "./components/Music";
import Podcast from "./components/Podcast";

const App = () => {
  const { audioRef } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <div>
              <Home />
              {/* Add ConnectWallet to the Home page */}
              <div className="flex justify-center mt-6">
                <ConnectWallet client={client} />
              </div>
            </div>
          }
        />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Music Player Route */}
        <Route
          path="/player/*"
          element={
            <div className="h-screen bg-black">
              <div className="h-[90%] flex">
                <Sidebar />
                <Display />
              </div>
              <Player />
              <audio ref={audioRef} preload="auto"></audio>
            </div>
          }
        />
        <Route path="/live-concerts" element={<LiveConcerts />} />
        <Route path="/music" element={<Music />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </div>
  );
};

export default App;
