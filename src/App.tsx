// Import the CurrentView type
import React, { useState } from 'react';
import './App.css';
import GraphView from './components/graph';
import { SideBar } from './components/navBar';
import GridView from './components/gridView';
import LegendGraphView from './components/graphLegend';

export type CurrentView = 'graph' | 'grid';

function App() {
  console.log('App rendered'); // Add this line

  const [currentView, setCurrentView] = useState<CurrentView>('graph');


  console.log('Current View:', currentView);
  const toggleView = (view: CurrentView) => {
    console.log('Toggling view to:', view);
    setCurrentView(view);
  };

  return (
    <div className="App">

      <SideBar toggleView={toggleView} />
      {currentView === 'graph' ? <GraphView  /> : <GridView />}
    </div>
  );
}

export default App;
