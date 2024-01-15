import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ReservingPage from './pages/ReservingPage'
import { Route, Routes , useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './utils/API';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  const updateTimes = (state, date) => {
    return fetchAPI(date);
  }

  const initializeTimes = () => {
    const currentDate = new Date().toISOString().substring(0, 10);
    return fetchAPI(currentDate);
  }

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (data) => {
    if (submitAPI(data)) {
      console.log("Form is submitted successfully.");
      navigate('/confirmation')
    }
  }
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/"
            element={<HomePage />} />
          <Route path="/reserving"
            element={<ReservingPage
              submitForm={submitForm}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes} />} />
            <Route path="/confirmation" element={<ConfirmationPage/>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
