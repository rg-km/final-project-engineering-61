import './App.css';
import Register from './components/pages/Login/Register';
import Login from './components/pages/Login/Login';
import Rating from './components/pages/Rating/Rating';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
  <>
  <Router>
    <Routes>
    <Route path='/login'  element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/rating' element={<Rating />} />
    </Routes>
  </Router>
  </>

  );
}

export default App;
