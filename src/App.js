import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './styles/index.sass'
import { Routes, Route } from 'react-router-dom'
import Main from './components/main/Main';
import About from './components/about_us/About';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Sidebar/>}>
          <Route path='/home' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </div>   
  );
}

export default App;
