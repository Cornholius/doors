import React from 'react';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';
import './styles/index.sass'


function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;
