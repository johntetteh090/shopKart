import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import "./App.css"
import Products from './components/Products'
import { Routes, Route } from "react-router-dom";
import AddEditProduct from './components/AddEditProduct'

function App() {
  return (
    <div>

      {/* <Banner /> */}
      {/* <Products/> */}
      <Routes>
        {/* <Route path='/' */}
      <Route path="/new-product" element={<AddEditProduct/>} />
      <Route path="/" element={<Products/>} />
      </Routes>
    </div>
  )
}

export default App