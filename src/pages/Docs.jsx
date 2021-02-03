import React from 'react';
import SidebarDescription from './SidebarDescription';
import Description  from './Description';

function Docs() {
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

export default Docs;