import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Lpage from '../src/Landing Page/Lpage'
import Customer from '../src/Customer Page/Customer'

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/landingPage" element={<Lpage />}/>
        <Route path="/CustomerPage" element={<Customer />}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App