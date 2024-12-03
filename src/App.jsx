import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Checkout from './pages/Checkout';
import Address from './pages/Address';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Order from './pages/Order';
import { Navigate } from 'react-router-dom';


function App() {
  const ProtectRoute=({children})=>{
    const token =localStorage.getItem("token")
    if(!token){
      return <Navigate to="/" />
    } 
    else{
      return children;
    }

  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={
        <ProtectRoute>
        <Home/></ProtectRoute>} />
      <Route path='/restaurant' element={
        <ProtectRoute><Restaurant/> </ProtectRoute>} />
      <Route path='/checkout' element={<ProtectRoute><Checkout/> </ProtectRoute>} />
      <Route path='/address' element={<ProtectRoute><Address/> </ProtectRoute>} />
      <Route path='/payment' element={<ProtectRoute><Payment/> </ProtectRoute>} />
      <Route path='/order' element={<ProtectRoute><Order/> </ProtectRoute>} />
      <Route path='/profile' element={<ProtectRoute><Profile/> </ProtectRoute>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
