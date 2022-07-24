import React from 'react'
import Tugas7 from './tugas7/tugas7'
import Tugas8 from './tugas8/tugas8'
import Tugas9 from './tugas9/tugas9'
import Tugas10 from './tugas10/tugas10'
import Tugas11 from './tugas11/tugas11'
import Tugas12 from './tugas12/tugas12'
import Tugas13 from './tugas13/tugas13'
import Tugas15list from './tugas15/tugas15list'
import Tugas15form from './tugas15/tugas15form'
import Navbar from './components/navbar'
import { GlobalProvider } from './context/GlobalContext'
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {
  return(
    <>
    <BrowserRouter>
      <GlobalProvider>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Tugas7/>} />
            <Route path="/tugas15" element={<Tugas15list/>} />
            <Route path="/create" element={<Tugas15form/>} />
            <Route path="/edit/:idData" element={<Tugas15form/>} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;