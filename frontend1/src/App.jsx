import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import PropertyList from './pages/PropertyList';
import AddProperty from './pages/AddProperty';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex">
        <div className="flex-1 mr-64">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/properties" element={<PropertyList />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;