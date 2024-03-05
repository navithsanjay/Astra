
import './App.css';
import React from 'react';
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
  
 } from 'react-router-dom';
import Home from './Home';
import Astra from './astra';
import Brainiacs from './brainiacs';

import './astra.css'
function App() {
  return (

   

    <div className="App">
<BrowserRouter>
<Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/astra" element={<Astra/>} />
      <Route path="/brainiacs" element={<Brainiacs/>} />

    </Routes>

</BrowserRouter>


            
    </div>
  );
}

export default App;
