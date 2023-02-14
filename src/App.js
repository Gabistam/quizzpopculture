import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Composants/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Composants/Home';
import './App.css';
import QuizzPopCult from './Composants/QuizzPopCult';



export default function App() {

    
  

  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizz" element={<QuizzPopCult/>} />      
       
      </Routes>
      </BrowserRouter>
  )
}
