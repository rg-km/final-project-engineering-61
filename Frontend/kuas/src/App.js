import './App.css';
import Features from './components/pages/Home/Features/Features';
import Admin from './components/pages/admin/Admin';
import UploadMateri from './components/pages/admin/UploadMateri';
import User from './components/pages/user/User';
import MateriUser from './components/pages/user/MateriUser';
import Smp from './components/pages/user/Smp';
import Sma from './components/pages/user/Sma';
import MateriSma from './components/pages/user/MateriSma';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MateriSmp from './components/pages/user/MateriSmp';


function App() {
  return (
  <>
  <Router>
    <Routes>
    <Route path='/login'  element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/rating' element={<Rating />} />
    <Route path='/' element={<Home/>} />
    <Route path='/fitur' element={<Features/>}/>
    <Route path='/admin' element={<Admin />} />
    <Route path='/admin/upload-materi' element={<UploadMateri />} />
    <Route path='/user' element={<User />} />
    <Route path='/user/materi-belajar' element={<MateriUser/>}/>  
    <Route path='/user/materi-belajar/smp'>
      <Route index element={<Smp/>}/>
      <Route path='/user/materi-belajar/smp/:id' element={<MateriSmp/>}/>
    </Route>  
    <Route path='/user/materi-belajar/sma'>
      <Route index element={<Sma/>}/>
      <Route path='/user/materi-belajar/sma/:id' element={<MateriSma/>}/>
    </Route>  

    </Routes>
    <Footer/>
  </Router>
  </>

  );
}

export default App;
