import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    
    if (token) {
      setUser({
        name: 'John Doe',
        avatar: '👤'
      });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 shadow-2xl border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl"></div>
            <span className="text-xl font-bold text-white glow-text">RentalApp</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-blue-400 transition duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className="text-gray-300 hover:text-blue-400 transition duration-200 font-medium"
            >
              Browse Properties
            </Link>
            {isLoggedIn && (
              <Link 
                to="/add-property" 
                className="text-gray-300 hover:text-blue-400 transition duration-200 font-medium"
              >
                Add Property
              </Link>
            )}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                  <Link 
                   to="/dashboard" 
                   className="text-gray-300 hover:text-blue-400 transition duration-200 font-medium"
                 >
                   Dashboard
                 </Link>
                 <div className="flex items-center space-x-2">
                   <span className="text-lg">{user?.avatar}</span>
                   <span className="text-white font-medium">{user?.name}</span>
                 </div>
                  <button
                   onClick={handleLogout}
                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 text-sm font-medium"
                 >
                   Logout
                 </button>
              </div>
            ) : (
                <Link 
                 to="/login" 
                 className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-medium"
               >
                 Login
               </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;