import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Player from "./components/Player"
import Display from "./components/Display"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { PlayerContext } from "./context/PlayerContext"

const App = () => {
  const { audioRef } = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login />} />

        {/* Music Player Route */}
        <Route
          path="/player"
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

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App
