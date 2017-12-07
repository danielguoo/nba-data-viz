import React from 'react';
import logo from '../nbalogo.png';
import './App.css';
import 'react-vis/dist/style.css';
import TableView from '../containers/TableView'
import VisualizationView from '../containers/VisualizationView'
import Filter from '../components/Filter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'


const App = () =>  {

  return (
    <div className="App">
      <MuiThemeProvider>
        <AppBar title='NBA Data Visualization'
                />
        <div className="Body">
          <VisualizationView/>
          <Filter/>
          <TableView/>
        </div>
      </MuiThemeProvider>
    </div>
  );
}


export default App;
