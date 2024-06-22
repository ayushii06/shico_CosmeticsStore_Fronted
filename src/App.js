import Navbar from './components/Navbar/Navbar';
import styles from './components/Navbar/Navbar.css'
import Home from './components/Home/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import NewArrivals from './components/NewArrivals/NewArrivals'
import Cosmetics from './components/Cosmetics/Cosmetics';
import Login from './components/Login/login'
import Register from './components/Register/Register';
import ProductDesc from './components/Product/ProductDesc';
import Cart from './components/Cart/Cart'
import User from './components/User/User'
import Footer from './components/Footer/Footer';
// import ProductState from './context/ProductState';
// import UserContext from './context/UserState'
import ProductGallery from './components/Product/ProductGallery';
import Otp from './components/Register/Otp';
import VerifyOTP from './components/Register/VerifyOTP';

function App() {
  return (
    <>
    {/* <UserContext> */}
    {/* <ProductState> */}
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/newarrivals' element={<NewArrivals/>}></Route>
        <Route path='/cosmetic' element={<Cosmetics/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/verifyOTP' element={<VerifyOTP/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/productdesc' element={<ProductDesc/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/lips' element={<ProductGallery category='Lips'/>}></Route>
        <Route path='/face' element={<ProductGallery category='Face'/>}></Route>
        <Route path='/skin' element={<ProductGallery category='Skin'/>}></Route>
        <Route path='/fragrance' element={<ProductGallery category='Fragrance'/>}></Route>
        <Route path='/hair' element={<ProductGallery category='Hair'/>}></Route>
        <Route path='/nails' element={<ProductGallery category='Nails'/>}></Route>
        <Route path='/eyes' element={<ProductGallery category='Eyes'/>}></Route>
        
    </Routes>
  
    </BrowserRouter>
    <Footer></Footer>
    {/* </ProductState> */}
    {/* </UserContext> */}
    </>
  );
}

export default App;
