import Description  from './pages/Description';
import React from 'react';
import './App.css';
import SidebarDescription from './pages/SidebarDescription';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <b>Adamite Overview</b>
          <Description />
          <SidebarDescription />
      </header>
    </div>
  );
}

export default App;
