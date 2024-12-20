import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const images = [
  'https://replicate.delivery/pbxt/IJeRpXVvxMJe1XcaGHXTVXnEZBHrWiKEBDXiIF2CfEknnXHE/out-0.png',
  'https://replicate.delivery/pbxt/0cDHRnMaRqIGZZRPaFHWbTpXrBhvZGVVxPPGq7dRgxzxnXHE/out-0.png',
  'https://replicate.delivery/pbxt/VIt7YF9TqhUzHXxhSwlUGxQcCo3kZGVVxPPGq7dRgxzunXHE/out-0.png'
];

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6">AlleChain</h1>
          <p className="text-xl mb-8">Tokenized Livestreaming Platform Powered by Livepeer</p>
          
          <div className="relative w-full max-w-4xl mx-auto mb-12 h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
              alt="AI generated streaming concept"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home


