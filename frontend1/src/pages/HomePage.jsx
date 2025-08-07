import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 animate-fade-in glow-text">
            Find Your Perfect Home
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Discover thousands of rental properties in your area. From cozy apartments to spacious houses, 
            we have the perfect place for you to call home.
          </p>
          <div className="flex justify-center gap-6 animate-fade-in-delay-2">
            <button 
              onClick={() => navigate('/properties')}
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition duration-200"
            >
              Browse Properties
            </button>
            <button 
              onClick={() => navigate('/add-property')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 hover:text-white transition duration-200"
            >
              List Your Property
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl text-center border border-gray-700 hover:border-blue-500 transition-all duration-300 card-hover">
            <div className="text-5xl mb-4 ">🏠</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Wide Selection</h3>
            <p className="text-gray-300">Browse through thousands of verified properties in your preferred location.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl text-center border border-gray-700 hover:border-green-500 transition-all duration-300 card-hover">
            <div className="text-5xl mb-4 animate-pulse">💰</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Best Prices</h3>
            <p className="text-gray-300">Find competitive rental rates and transparent pricing with no hidden fees.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-2xl text-center border border-gray-700 hover:border-purple-500 transition-all duration-300 card-hover">
            <div className="text-5xl mb-4 ">🔒</div>
            <h3 className="text-xl font-semibold mb-2 text-white">Secure Booking</h3>
            <p className="text-gray-300">Safe and secure booking process with verified landlords and properties.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-900 rounded-lg shadow-2xl p-8 mb-16 border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-white glow-text">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-blue-400 mb-2 glow-text">xxxxx+</div>
              <div className="text-gray-300">Properties Listed</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl font-bold text-green-400 mb-2 glow-text">xxxx</div>
              <div className="text-gray-300">Happy Tenants</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl font-bold text-purple-400 mb-2 glow-text">xxx+</div>
              <div className="text-gray-300">Verified Landlords</div>
            </div>
            <div className="animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="text-4xl font-bold text-yellow-400 mb-2 glow-text">24/7</div>
              <div className="text-gray-300">Customer Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white glow-text">Ready to Find Your Home?</h2>
          <p className="text-gray-300 mb-6">Join thousands of satisfied customers who found their perfect rental.</p>
          <button 
            onClick={() => navigate('/properties')}
            className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold text-xl hover:bg-green-700 transition duration-200"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;