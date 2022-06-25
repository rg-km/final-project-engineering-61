import './App.css';
import Features from './components/pages/Home/Features/Features';
import Admin from './components/pages/admin/Admin';
import UploadMateri from './components/pages/admin/UploadMateri';
import Upsmp from './components/pages/admin/Smp/smp';
import Upsma from './components/pages/admin/Sma/sma';
import User from './components/pages/user/User';
import MateriUser from './components/pages/user/MateriUser';
import Smp from './components/pages/user/Smp';
import Sma from './components/pages/user/Sma';
import MateriSma from './components/pages/user/MateriSma';
import Home from './components/pages/Home/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MateriSmp from './components/pages/user/MateriSmp';
import MateriView from './components/pages/admin/Smp/MateriView';
import AddSmp from './components/pages/admin/Smp/AddSmp';
import Editsmp from './components/pages/admin/Smp/EditSmp';
import MateriView1 from './components/pages/admin/Sma/MateriView1';
import Editsma from './components/pages/admin/Sma/EditSma';
import Login from './components/pages/Login';
import Rate from './components/pages/Rating/Rate';
import NotFound from './components/NotFound';
import AddSma from './components/pages/admin/Sma/AddSma';



function App() {
  return (
  <>
  <Router>
    <Routes>
    <Route path='*' element={<NotFound />} />
    <Route path='/' element={<Home/>} />
    <Route path='/fitur' element={<Features/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/rate' element={<Rate/>}/>
    <Route path='/admin' element={<Admin />} />
    <Route path='/admin/upload-materi' element={<UploadMateri />} />
    <Route path='/admin/upload-materi/smp'>
      <Route index element={<Upsmp/>}/>
      <Route path='/admin/upload-materi/smp/:id' element={<MateriView/>} />
    </Route>
    <Route path='/admin/upload-materi/smp/add' element={<AddSmp/>} />
    <Route path='/admin/upload-materi/smp/edit/:id' element={<Editsmp/>} />
    <Route path='/admin/upload-materi/sma' element={<Upsma/>} />
    <Route path='/admin/upload-materi/sma/:id' element={<MateriView1/>} />
    <Route path='/admin/upload-materi/sma/add' element={<AddSma/>} />
    <Route path='/admin/upload-materi/sma/edit/:id' element={<Editsma/>} />
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
