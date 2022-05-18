import React from 'react';
import Header from './components/header/Header';
import './styles/index.sass'
import { Routes, Route } from 'react-router-dom'
// import Main from './components/main/Main';
// import About from './components/about_us/About';
// import Collections from './components/collections/Collections';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          {/* <Route index element={<Main/>}/> */}
          {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/collections' element={<Collections/>}/> */}
        </Route>
      </Routes>
    </div>   
  );
}

export default App;
