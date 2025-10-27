import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Offers />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
