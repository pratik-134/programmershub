import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom'; 
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Images from './components/Images';
import Services from './components/Services';
import Login from './components/Login';
import Err from './components/Err'
import Api from './components/Api';
import Api1 from './components/Api1';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
      <Route path='/contactus' element={<ContactUs/>}></Route>
      <Route path='/services/:val' element={<Services/>}></Route>
      <Route path='/images' element={<Images/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/api' element={<Api/>}></Route>
      <Route path='/api1' element={<Api1/>}></Route>
      <Route path='*' element={<Err/>}></Route>
    </Routes>
    </>
    
  );
}

export default App;
