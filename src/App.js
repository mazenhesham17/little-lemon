import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ReservingPage from './pages/ReservingPage'
import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';

function App() {
  const updateTimes = (state, date) => {
    return state;
  }

  const initializeTimes = () => {
    return ["19:30 pm", "20:00 pm", "20:30 pm"]
  }

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/"
            element={<HomePage />} />
          <Route path="/reserving"
            element={<ReservingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
