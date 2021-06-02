import React from 'react';
import SidebarDescription from './SidebarDescription';
import Description  from './Description';
import 'Description.css';

function Docs() {
  return (
    <div className="App container">
      <header className="App-header">
          {/* <h2>Adamite Overview</h2> */}
          <Description />
          <SidebarDescription />
      </header>
    </div>
  );
}

export default Docs;