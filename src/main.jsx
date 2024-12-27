import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PlayerContextProvider from './context/PlayerContext.jsx';
import { ThirdwebProvider } from '@thirdweb-dev/react'; // Make sure this is imported

// Check and define 'window.ethereum' if it doesn't exist
if (!Object.prototype.hasOwnProperty.call(window, 'ethereum')) {
  Object.defineProperty(window, 'ethereum', { value: {}, configurable: true });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <ThirdwebProvider>
          <App />
        </ThirdwebProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
