import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'





 
class App extends Component{

  render(){


    return(
     
      <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='About' element={<About />} />
          <Route path='Project' element={<Project />} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>
        
        <Footer/>
         



  
      </>
    )
  }
}



export default App