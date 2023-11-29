import React from 'react';
import logo from './logo.svg';
import './App.css';
import GraphView from './components/graph';
import { SideBar } from './components/navBar';
import { GlobalStyle } from './global';
import GridView from './components/gridView';


function App() {
  return (
    <div className="App">
			<SideBar />
      <GlobalStyle/>
      <GraphView/>
      <GridView/>
    </div>
  );
}

export default App;
