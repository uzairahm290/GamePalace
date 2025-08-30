import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAside } from '~/components/Aside';
import { 
  FaBars, 
  FaTimes, 
  FaSearch, 
  FaUser, 
  FaGamepad, 
  FaChevronDown,
  FaFire,
  FaRocket
} from 'react-icons/fa';
import { BiTargetLock } from 'react-icons/bi';

export function ModernNavbar() {
  const navigate = useNavigate();
  const { open } = useAside();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [collections, setCollections] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [collectionsLoading, setCollectionsLoading] = useState(true);
  const [selectedCollection, setSelectedCollection] = useState('Select Game');

  // Fetch collections from Shopify
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setCollectionsLoading(true);
        const response = await fetch('/api/collections');
        if (response.ok) {
          const data = await response.json();
          setCollections(data.collections || []);
        } else {
          console.error('Failed to fetch collections');
        }
      } catch (error) {
        console.error('Error fetching collections:', error);
      } finally {
        setCollectionsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const results = collections.filter(collection => 
        collection.title.toLowerCase().includes(query.toLowerCase()) ||
        (collection.description && collection.description.toLowerCase().includes(query.toLowerCase()))
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCollectionSelect = (collection) => {
    setSelectedCollection(collection.title);
    setIsDropdownOpen(false);
    setSearchQuery('');
    navigate(`/collections/${collection.handle}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-500/20 backdrop-blur-md shadow-2xl border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <FaGamepad className="text-blue-400 text-2xl" />
            <h1 className="text-lg lg:text-xl font-bold text-white">
              HUH BOOST
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/collections" className="text-white hover:text-blue-400 transition-colors duration-300">
              Collections
            </Link>
            <Link to="/products" className="text-white hover:text-blue-400 transition-colors duration-300">
              Products
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition-colors duration-300">
              About
            </Link>
          </div>

          {/* Game Selector Dropdown */}
          <div className="relative dropdown-container hidden md:block">
            <button 
              onClick={toggleDropdown}
              className="group relative flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-white/5"
            >
              {/* Glass reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-blue-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <BiTargetLock className="text-blue-400 text-lg relative z-10" />
              <span className="text-sm relative z-10">{selectedCollection}</span>
              <FaChevronDown className={`text-gray-400 text-xs relative z-10 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Enhanced Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[420px] bg-slate-800/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                {/* Search Bar */}
                <div className="p-4 border-b border-white/10 search-container">
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="text"
                      placeholder="Search Collections..."
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      onFocus={() => setShowSearchResults(true)}
                      className="w-full pl-10 pr-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Search Results */}
                    {showSearchResults && searchResults.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-slate-700/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50">
                        <div className="max-h-64 overflow-y-auto">
                          {searchResults.map((collection) => (
                            <button
                              key={collection.id}
                              onClick={() => handleCollectionSelect(collection)}
                              className="w-full flex items-center gap-3 p-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0 text-left"
                            >
                              <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                                {collection.image ? (
                                  <img
                                    src={collection.image.url}
                                    alt={collection.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                                    {collection.title.charAt(0)}
                                  </div>
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-white font-medium text-sm truncate">{collection.title}</div>
                                {collection.description && (
                                  <div className="text-gray-400 text-xs truncate">{collection.description}</div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Collections Content */}
                <div className="max-h-96 overflow-y-auto">
                  {/* Featured Collections */}
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <FaFire className="text-red-500 text-sm" />
                      <h3 className="text-white font-semibold text-sm">Featured Collections</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {collectionsLoading ? (
                        // Loading skeleton
                        Array.from({ length: 4 }).map((_, index) => (
                          <div key={index} className="relative bg-white/5 rounded-lg p-2 min-h-[120px] animate-pulse">
                            <div className="w-full h-24 mb-2 rounded-lg bg-gray-700"></div>
                            <div className="h-4 bg-gray-700 rounded"></div>
                          </div>
                        ))
                      ) : collections.length > 0 ? (
                        collections.slice(0, 4).map((collection, index) => (
                          <button
                            key={collection.id}
                            onClick={() => handleCollectionSelect(collection)}
                            className="group relative bg-white/5 hover:bg-white/10 rounded-lg p-2 transition-all duration-300 text-left overflow-hidden min-h-[120px]"
                          >
                            {/* Collection Image */}
                            <div className="relative w-full h-24 mb-2 rounded-lg overflow-hidden bg-gray-800">
                              {collection.image ? (
                                <img
                                  src={collection.image.url}
                                  alt={collection.title}
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
                                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                                    {collection.title.charAt(0)}
                                  </div>
                                </div>
                              )}
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                            </div>
                            
                            {/* Collection Name */}
                            <div className="flex items-center justify-between">
                              <span className="text-white text-xs font-medium truncate">{collection.title}</span>
                              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {collection.title.charAt(0)}
                              </div>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="col-span-2 text-center py-8">
                          <p className="text-gray-400 text-sm">No collections found</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* View All Collections */}
                  <div className="p-4 border-t border-white/10 bg-gradient-to-r from-blue-500/10 via-blue-600/10 to-blue-700/10">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FaRocket className="text-white text-sm" />
                      </div>
                      <Link 
                        to="/collections" 
                        onClick={() => setIsDropdownOpen(false)}
                        className="text-white font-semibold mb-2 text-sm hover:text-blue-300 transition-colors"
                      >
                        View All Collections
                      </Link>
                      <p className="text-gray-300 text-xs">Explore our complete collection of gaming products</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button onClick={() => open('search')} className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaSearch className="text-lg" />
            </button>
            <button onClick={() => open('cart')} className="text-white hover:text-blue-400 transition-colors duration-300">
              Cart
            </button>
            <Link to="/account" className="text-white hover:text-blue-400 transition-colors duration-300">
              <FaUser className="text-lg" />
            </Link>
            <button onClick={toggleMobileMenu} className="md:hidden text-white hover:text-blue-400 transition-colors duration-300">
              {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg mt-2 p-4 shadow-xl">
            {/* Mobile Collections Selector */}
            <div className="mb-4">
              <label className="block text-white text-sm font-medium mb-2">Select Collection</label>
              <select 
                value={selectedCollection}
                onChange={(e) => {
                  const collection = collections.find(c => c.title === e.target.value);
                  if (collection) {
                    setSelectedCollection(collection.title);
                    navigate(`/collections/${collection.handle}`);
                  }
                }}
                className="w-full px-3 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Select Game" className="bg-slate-800 text-white">Select Collection</option>
                {collections.map((collection) => (
                  <option key={collection.id} value={collection.title} className="bg-slate-800 text-white">
                    {collection.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              <Link to="/collections" className="block text-white hover:bg-white/10 rounded-lg px-3 py-2 transition-colors">
                Collections
              </Link>
              <Link to="/products" className="block text-white hover:bg-white/10 rounded-lg px-3 py-2 transition-colors">
                Products
              </Link>
              <Link to="/about" className="block text-white hover:bg-white/10 rounded-lg px-3 py-2 transition-colors">
                About
              </Link>
              <Link to="/account" className="block text-white hover:bg-white/10 rounded-lg px-3 py-2 transition-colors">
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}