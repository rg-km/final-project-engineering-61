import './App.css';
import Features from './components/pages/Home/Features/Features';
import Admin from './components/pages/admin/Admin';
import UploadMateri from './components/pages/admin/UploadMateri';
import UploadVideo from './components/pages/admin/UploadVideo';
import Materi from './components/pages/Materi';
import User from './components/pages/user/User';
import MateriUser from './components/pages/user/MateriUser';
import VideoUser from './components/pages/user/VideoUser';
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
    <Route path='/admin/upload-materi' element={<UploadMateri />} />
    <Route path='/admin/upload-video' element={<UploadVideo />} />
    <Route path='/user' element={<User />} />
    <Route path='/user/materi-belajar' element={<MateriUser/>}/> 
    <Route path='/user/video-belajar' element={<VideoUser/>}/> 
    </Routes>
    <Footer/>
  </Router>
  </>

  );
}

export default App;
