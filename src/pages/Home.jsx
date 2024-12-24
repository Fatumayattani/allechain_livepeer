import React from 'react';
import { motion } from 'framer-motion';
import { Play, Radio, Shield, Zap, Users, Github, Twitter, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  'https://replicate.delivery/pbxt/IJeRpXVvxMJe1XcaGHXTVXnEZBHrWiKEBDXiIF2CfEknnXHE/out-0.png',
  'https://replicate.delivery/pbxt/0cDHRnMaRqIGZZRPaFHWbTpXrBhvZGVVxPPGq7dRgxzxnXHE/out-0.png',
  'https://replicate.delivery/pbxt/VIt7YF9TqhUzHXxhSwlUGxQcCo3kZGVVxPPGq7dRgxzunXHE/out-0.png'
];

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Play className="w-8 h-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-white">AlleChain</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#creators" className="text-gray-300 hover:text-white transition-colors">Creators</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <button
                onClick={() => navigate('/login')}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-orange-900 to-black">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-20">
            Stream Without Limits
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The next generation decentralized streaming platform powered by Livepeer technology.
            Built for creators, by creators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const Features = () => {
  const features = [
    {
      icon: <Radio className="w-6 h-6 text-orange-500" />,
      title: "Real-time Streaming",
      description: "Ultra-low latency streaming powered by Livepeer's decentralized network"
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      title: "Decentralized Security",
      description: "Your content is secure and censorship-resistant on the blockchain"
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: "Lightning Fast",
      description: "Global CDN ensures your streams reach viewers with minimal delay"
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Creator Community",
      description: "Connect with other creators and grow your audience together"
    }
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose AlleChain?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience the future of content streaming with our cutting-edge features
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <Play className="w-6 h-6 text-orange-500" />
            <span className="ml-2 text-lg font-bold text-white">AlleChain</span>
          </div>
          <p className="text-gray-400">Decentralized streaming for the future of content creation.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Platform</h3>
          <div className="flex flex-col space-y-2">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#docs" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Company</h3>
          <div className="flex flex-col space-y-2">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#careers" className="text-gray-400 hover:text-white transition-colors">Careers</a>
            <a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Connect</h3>
          <div className="flex space-x-4">
            <a href="#twitter" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#github" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Features />
    <Footer />
  </>
);

export default App;
