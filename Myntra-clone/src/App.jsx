import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from "./Components/Header";
import HeaderLayout from './layouts/HeaderLayout'
import Home from './Screens/Home'
import Products from './Screens/Products'
import Cart from './Screens/Cart'
import Orders from './Screens/Orders'
import WishList from './Screens/Wishlist'

function App() {

  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<WishList />} />

      </Route>
      

    </Routes>
  )
}

export default App
