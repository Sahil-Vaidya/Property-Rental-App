import { useEffect, useState } from 'react';
import axios from 'axios';

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: 'All Locations',
    type: 'All Types',
    priceRange: 'Price Range'
  });

  useEffect(() => {
    // Set loading to true initially
    setLoading(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      // Set sample properties directly
      const sampleProperties = [
        {
          _id: '1',
          title: 'Modern 2BHK Apartment',
          description: 'Beautiful apartment with modern amenities, located in the heart of the city. Features include parking, gym, and 24/7 security.',
          rentPerMonth: 25000,
          location: 'Mumbai, Maharashtra',
          bedrooms: 2,
          bathrooms: 2,
          area: '1200 sq ft',
          image: '🏢',
          type: 'Apartment'
        },
        {
          _id: '2',
          title: 'Luxury Villa with Garden',
          description: 'Spacious villa with private garden, perfect for families. Includes swimming pool and modern kitchen.',
          rentPerMonth: 45000,
          location: 'Pune, Maharashtra',
          bedrooms: 3,
          bathrooms: 3,
          area: '2500 sq ft',
          image: '🏡',
          type: 'Villa'
        },
        {
          _id: '3',
          title: 'Cozy Studio Apartment',
          description: 'Perfect for students or young professionals. Fully furnished with all basic amenities.',
          rentPerMonth: 15000,
          location: 'Bangalore, Karnataka',
          bedrooms: 1,
          bathrooms: 1,
          area: '600 sq ft',
          image: '🏠',
          type: 'Studio'
        },
        {
          _id: '4',
          title: 'Premium Penthouse',
          description: 'Luxurious penthouse with panoramic city views and modern appliances.',
          rentPerMonth: 75000,
          location: 'Mumbai, Maharashtra',
          bedrooms: 3,
          bathrooms: 3,
          area: '1800 sq ft',
          image: '🏙️',
          type: 'Penthouse'
        }
      ];
      setProperties(sampleProperties);
      setFilteredProperties(sampleProperties);
      setLoading(false);
    }, 1000); // 1 second delay to show loading animation
  }, []);

  // Filter properties based on selected filters
  const applyFilters = () => {
    let filtered = [...properties];

    // Filter by location
    if (filters.location !== 'All Locations') {
      filtered = filtered.filter(property => 
        property.location.includes(filters.location)
      );
    }

    // Filter by type
    if (filters.type !== 'All Types') {
      filtered = filtered.filter(property => 
        property.type === filters.type
      );
    }

    // Filter by price range
    if (filters.priceRange !== 'Price Range') {
      switch (filters.priceRange) {
        case '₹10,000 - ₹20,000':
          filtered = filtered.filter(property => 
            property.rentPerMonth >= 10000 && property.rentPerMonth <= 20000
          );
          break;
        case '₹20,000 - ₹30,000':
          filtered = filtered.filter(property => 
            property.rentPerMonth >= 20000 && property.rentPerMonth <= 30000
          );
          break;
        case '₹30,000 - ₹50,000':
          filtered = filtered.filter(property => 
            property.rentPerMonth >= 30000 && property.rentPerMonth <= 50000
          );
          break;
        case '₹50,000+':
          filtered = filtered.filter(property => 
            property.rentPerMonth >= 50000
          );
          break;
        default:
          break;
      }
    }

    setFilteredProperties(filtered);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-spin">⏳</div>
          <p className="text-xl text-gray-300">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❌</div>
          <p className="text-xl text-gray-300">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-gray-900 rounded-lg shadow-2xl p-6 mb-8 border border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 glow-text">Available Properties</h1>
              <p className="text-gray-300">Find your perfect rental property from our curated collection</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-400 glow-text">{filteredProperties.length}</p>
              <p className="text-gray-300">Properties</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-900 rounded-lg shadow-2xl p-6 mb-8 border border-gray-700">
          <h2 className="text-xl font-bold mb-4 text-white">Filters</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <select 
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>All Locations</option>
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Bangalore</option>
            </select>
            <select 
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>All Types</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Studio</option>
              <option>Penthouse</option>
            </select>
            <select 
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="border border-gray-600 bg-gray-800 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Price Range</option>
              <option>₹10,000 - ₹20,000</option>
              <option>₹20,000 - ₹30,000</option>
              <option>₹30,000 - ₹50,000</option>
              <option>₹50,000+</option>
            </select>
            <button 
              onClick={applyFilters}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
            >
              Apply Filters
            </button>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property, index) => (
            <div 
              key={property._id} 
              className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 card-hover animate-fade-in border border-gray-700 hover:border-blue-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <span className="text-6xl">{property.image}</span>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{property.title}</h2>
                <p className="text-gray-300 mb-4 line-clamp-2">{property.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span>🛏️ {property.bedrooms} Beds</span>
                    <span>🚿 {property.bathrooms} Baths</span>
                    <span>📏 {property.area}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-blue-400 glow-text">₹{property.rentPerMonth.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">per month</p>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200">
                    Book Now
                  </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-400">📍 {property.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 animate-bounce">🏠</div>
            <h2 className="text-2xl font-bold text-white mb-2 glow-text">No Properties Found</h2>
            <p className="text-gray-300 mb-4">No properties match your current filters.</p>
            <button 
              onClick={() => {
                setFilters({
                  location: 'All Locations',
                  type: 'All Types',
                  priceRange: 'Price Range'
                });
                setFilteredProperties(properties);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PropertyList;