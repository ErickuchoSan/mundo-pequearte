import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Nosotras from './pages/Nosotras';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import ActivityPage from './pages/ActivityPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotras" element={<Nosotras />} />
            <Route path="/actividades" element={<Catalogo />} />
            <Route path="/actividades/:slug" element={<ActivityPage />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
