import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ReservingPage from './pages/ReservingPage'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserving" element={<ReservingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
