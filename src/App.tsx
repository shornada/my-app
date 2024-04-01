// App.jsx
import React, { useState } from 'react';
import './App.css';
import GraphView from './components/graph';
import { SideBar } from './components/navBar';
import GridView from './components/gridView';


export type CurrentView = 'graph' | 'grid';

function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('graph');

  const toggleView = (view: CurrentView) => {
    setCurrentView(view);
  };

  return (
    <div className="App">
      <SideBar toggleView={toggleView} />
      <div className="main-content">
        {currentView === 'graph' ? <GraphView /> : <GridView />}
      </div>
    </div>
  );
}

export default App;
