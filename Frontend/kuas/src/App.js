import './App.css';
import Features from './components/pages/Home/Features/Features';
import Admin from './components/pages/admin/Admin';
import UploadMateri from './components/pages/admin/UploadMateri';
import User from './components/pages/user/User';
import MateriUser from './components/pages/user/MateriUser';
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
    <Route path='/admin' element={<Admin />} />
    <Route path='/admin/upload-materi' element={<UploadMateri />} />
    <Route path='/user' element={<User />} />
    <Route path='/user/materi-belajar' element={<MateriUser/>}/> 
    </Routes>
    <Footer/>
  </Router>
  </>

  );
}

export default App;
