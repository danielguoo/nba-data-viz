import React from 'react';
import logo from '../nbalogo.png';
import './App.css';
import 'react-vis/dist/style.css';
import TableView from '../containers/TableView'
import VisualizationView from '../containers/VisualizationView'


const App = () =>  {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt='nbalogo' />
        <h1 className="App-title">NBA Data Visualization</h1>
      </header>
      <VisualizationView/>
      <TableView/>
    </div>
  );
}






export default App;
