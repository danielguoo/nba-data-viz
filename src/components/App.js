import React, {Component} from 'react';
import logo from '../nbalogo.png';
import './App.css';
import 'react-vis/dist/style.css';
import TableView from '../containers/TableView'
import VisualizationView from '../containers/VisualizationView'
import Filter from '../components/Filter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'


class App extends Component  {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open})
  render () {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar title='NBA Data Visualization'
                  onLeftIconButtonClick={this.handleToggle}
                  zDepth='0'
                  />
          <div className="Body">
            <VisualizationView/>
            <Filter open={this.state.open}/>
            <TableView/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}


export default App;
