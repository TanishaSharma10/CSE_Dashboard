import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/signup_sign/Signin';
import SignUp from './components/signup_sign/SignUp';
import Cart from './components/cartte/Cart';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbaar/>
      <Newnav/>
      <Routes>
        <Route path="/" element={<Maincomp />} /> 
        <Route path="/login" element={<Signin />} /> 
        <Route path="/register" element={<SignUp />} /> 
        <Route path="/getproductsone/:id" element={<Cart />}/>
      </Routes>
      
      <Footer/>
      
     
    </>
  );
}

export default App;
