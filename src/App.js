import React from 'react'
import Home from './pages/Home'
import Mentor from './pages/Mentor'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mentor' element={<Mentor/>}/>
        </Routes>
        </BrowserRouter>
    )
    
}
export default App