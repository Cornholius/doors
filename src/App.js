import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './styles/index.sass'
import { Routes, Route } from 'react-router-dom'
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Sidebar/>}>
          <Route path='/home' element={<Main/>}/>
        </Route>
      </Routes>
    </div>   
  );
}

export default App;
