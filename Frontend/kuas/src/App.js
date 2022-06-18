import './App.css';
import Features from './components/pages/Home/Features/Features';
import Admin from './components/pages/admin/Admin';
import Materi from './components/pages/Materi';
import User from './components/pages/user/User';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
  <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/fitur' element={<Features/>}/>
    <Route path='/materi' element={<Materi/>}/> 
    <Route path='/admin' element={<Admin />} />
    <Route path='/user' element={<User />} />
    </Routes>
    <Footer/>
  </Router>
  </>

  );
}

export default App;
