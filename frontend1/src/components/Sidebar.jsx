import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/properties', label: 'Properties', icon: '🏢' },
    { path: '/add-property', label: 'Add Property', icon: '➕', requiresAuth: true },
    { path: '/dashboard', label: 'Dashboard', icon: '📊', requiresAuth: true },
    { path: '/contact', label: 'Contact', icon: '📞' },
    { path: '/login', label: 'Login', icon: '🔐', showWhenLoggedOut: true },
  ];

  const filteredItems = navItems.filter(item => {
    if (item.requiresAuth && !isLoggedIn) return false;
    if (item.showWhenLoggedOut && isLoggedIn) return false;
    return true;
  });

  return (
    <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 shadow-2xl border-l border-gray-700 z-50">
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="text-2xl"></div>
          <span className="text-xl font-bold text-white">RentalApp</span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-2">
          {filteredItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* User Status */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex items-center space-x-3 px-4 py-3">
            <div className="text-lg">👤</div>
            <div>
              <p className="text-white font-medium">
                {isLoggedIn ? 'Welcome back!' : 'Guest User'}
              </p>
              <p className="text-gray-400 text-sm">
                {isLoggedIn ? 'You are logged in' : 'Please login to continue'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-white font-semibold mb-3">Quick Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Properties</span>
              <span className="text-blue-400">4</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Users</span>
              <span className="text-green-400">xx</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Bookings</span>
              <span className="text-yellow-400">x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
