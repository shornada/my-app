import React, { useState, useEffect } from 'react';
import './App.css';
import GraphView from './components/graph';
import { SideBar } from './components/navBar';
import GridView from './components/gridView';
import Help from './components/help'; // Import the Help component

export type CurrentView = 'graph' | 'grid' | 'help';

/**
 * Main component representing the application.
 */
function App() {
  const [currentView, setCurrentView] = useState<CurrentView>('graph');
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(true); // Set to true to open Help dialog by default


  /**
   * Toggles between different views (graph, grid, help).
   * @param view - The view to be set ('graph', 'grid', 'help').
   */
  const toggleView = (view: CurrentView) => {
    setCurrentView(view);
  };

  /**
   * Closes the Help modal.
   */
  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className="App">
      <SideBar 
        toggleView={toggleView} 
        openHelpModal={() => setIsHelpModalOpen(true)} // Open Help modal directly from the Sidebar
        closeHelpModal={closeHelpModal} 
        isHelpModalOpen={isHelpModalOpen} 
      />
      <div className="main-content">
        {currentView === 'graph' ? (
          <GraphView />
        ) : currentView === 'grid' ? (
          <GridView />
        ) : null}
      </div>
      <Help isOpen={isHelpModalOpen} onClose={closeHelpModal} />
    </div>
  );
}

export default App;
