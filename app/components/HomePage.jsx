import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { 
  FaRocket, 
  FaComments,
  FaSearch,
  FaUser,
  FaCoins,
  FaBox,
  FaFolderPlus,
  FaHeart,
  FaKey
} from 'react-icons/fa';
import { GiUpgrade } from "react-icons/gi";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  // Background images for carousel
  const backgroundImages = [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80'
  ];

  const services = [
    { 
      title: "Accounts", 
      icon: <FaUser className="text-xl" />, 
      color: "text-blue-400"
    },
    { 
      title: "Boosting", 
      icon: <FaRocket className="text-xl" />, 
      color: "text-blue-400"
    },
    { 
      title: "Items", 
      icon: <FaBox className="text-xl" />, 
      color: "text-blue-400"
    },
    { 
      title: "Currencies", 
      icon: <FaCoins className="text-xl" />, 
      color: "text-blue-400"
    },
    { 
      title: "Levelling", 
      icon: <GiUpgrade className="text-xl" />, 
      color: "text-blue-400"
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    // Background image carousel interval
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(imageInterval);
    };
  }, [backgroundImages.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover opacity-20"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Dominate Every Game with <span className=" text-blue-400">
            <br />Premium
            </span> Services
          </h1>
          
          {/* Sub-headline */}
          <div className="text-lg sm:text-xl text-gray-300 mb-8">
          Premium Accounts ⸱ Expert Boosting ⸱ Authentic Game Assets
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 pr-6 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </form>
        </div>

        {/* Service Categories - Centered */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-5 gap-4 max-w-2xl">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={`/services/${service.title.toLowerCase()}`}
                className="group relative bg-white/5 backdrop-blur-xl rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden shadow-lg hover:shadow-white/5"
              >
                {/* Realistic glass layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="flex flex-col items-center justify-center text-center relative z-10">
                  <div className={`${service.color} mb-2 group-hover:scale-110 transition-transform duration-300 relative flex justify-center`}>
                    {service.icon}
                    {service.notification && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="text-white text-xs font-medium text-center group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
