import React, { Component } from 'react';
import logo from './nbalogo.png';
import './App.css';
import nba from 'nba';
import '../node_modules/react-vis/dist/style.css';
import Scatterplot from './Scatterplot'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {CURRENT_PLAYERS: [], xseries: "min", yseries: "pts"}
    //this.sortBy = this.sortBy.bind(this)
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
    this.filterBy = this.filterBy.bind(this);
    nba.stats.playerStats().then(value => this.setState({CURRENT_PLAYERS: value.leagueDashPlayerStats}))
    console.log(this.state)
  }

  handleXChange(event) {
    this.setState({xseries: event.target.value})
  }
  handleYChange(event) {
    this.setState({yseries: event.target.value})
  }

  filterBy(cat) {
    console.log(cat)
    this.setState({CURRENT_PLAYERS: this.state.CURRENT_PLAYERS.sort((a,b)=> b[cat] - a[cat])})
  }

  importAllPlayers() {
    nba.stats.playerStats().then(value => this.setState({CURRENT_PLAYERS: value.leagueDashPlayerStats}))
    console.log(this.state.CURRENT_PLAYERS)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt='nbalogo' />
          <h1 className="App-title">NBA Data Visualization</h1>
        </header>
        <Scatterplot data={this.state.CURRENT_PLAYERS.map(player => ({...player, color: TEAM_COLORS[player.teamAbbreviation], x: player[this.state.xseries], y: player[this.state.yseries]}))} xseries={this.state.xseries} yseries={this.state.yseries} />
        <SelectAxes xseries={this.state.xseries} yseries={this.state.yseries} handleXChange={this.handleXChange} handleYChange={this.handleYChange}/>
        <button onClick={this.importAllPlayers.bind(this)}> Import All Players </button>
        <IndividualView filterBy={this.filterBy} players={this.state.CURRENT_PLAYERS} />
      </div>
    );
  }
}

class IndividualView extends Component {
  render() {
    return (
      <PlayersTable filterBy={this.props.filterBy} players={this.props.players} />
    );
  }
}

// function IndividualSelector(props) {
//     return null;
//  
// }

function SelectAxes(props) {
  return (
    <form>
      <label>
        X-Series:
        <select value={props.xseries} onChange={props.handleXChange}>
          {Object.keys(NBA_CATEGORY_FIELDS).map(cat => <option value={NBA_CATEGORY_FIELDS[cat]}>{cat}</option> )}
        </select>
      </label>
      <label>
        Y-Series:
        <select value={props.yseries} onChange={props.handleYChange}>
          {Object.keys(NBA_CATEGORY_FIELDS).map(cat => <option value={NBA_CATEGORY_FIELDS[cat]}>{cat}</option> )}
        </select>
      </label>
    </form>
    )
}

function PlayersTable(props) {
    return (
      <table>
        <thead>
          <tr>
            {Object.keys(NBA_CATEGORY_FIELDS).map((cat_name,i) => <th onClick={props.filterBy.bind(this, NBA_CATEGORY_FIELDS[cat_name])} key={i}>{cat_name}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.players.map((player, i) => {return <PlayerRow key={i} playerInfo={player}/> })}
        </tbody>
      </table>
    )
}

const NBA_CATEGORY_FIELDS = { "Name":"playerName","Team":"teamAbbreviation","GP":"gp","MIN":"min",
                             "FG": "fgm", "FGA": "fga", "FG%":"fgPct", "3P": "fG3M", "3PA": "fG3A", 
                             "3P%": "fg3Pct", "FTM": "ftm",
                             "FTA": "fta", "FT%": "ftPct", "ORB": "oreb", "DRB": "dreb", "TRB": "reb",
                              "AST": "ast", "STL":"stl", "BLK": "blk", "TOV": "tov", "PF": "pf", "PTS":"pts"}
const TEAM_COLORS = {"ATL": '#CC092F', "BKN": '#000000', "BOS": '#008853', "CHA": '#1D8CAB', "CHI":'#BC032B', "CLE": '#860038', "DAL": '#1061AC',
                     "DEN": '#4B90CD', "DET": '#ED174C', "GSW": '#FDB927', "HOU": '#D31145', "IND": '#002D62', "LAC": '#D81D47', "LAL": '#542583', "MEM": '#23375B',
                     "MIA": '#BF2F38', "MIL": '#00461B', "MIN": '#005183', "NOP": '#B5985A', "NYK": '#F48328', "OKC": '#F05333', "ORL" : '#0075BD', "PHI": '#003DA5',
                     "PHX": '#E66226', "POR": '#E13A3E', "SAC": '#724C9F', "SAS": '#84888B', "TOR": '#BE0F34', "UTA": '#00471B', "WAS": '#E51837' }                        


function PlayerRow(props) {
    const player = props.playerInfo
    return (
      <tr>
        {Object.values(NBA_CATEGORY_FIELDS).map((cat,i) => <td key={i}>{player[cat]}</td>)}
      </tr>
    )
}



export default App;
