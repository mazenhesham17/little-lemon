import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
