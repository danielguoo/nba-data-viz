import React, {Component} from 'react'
import { connect } from 'react-redux'
import Scatterplot from '../components/Scatterplot'
import SelectAxes from '../components/SelectAxes'

class VisualizationView extends Component {
  constructor(props){
    super(props)
    this.state = {x: "min", y: "pts"}
    this.handleXChange = this.handleXChange.bind(this);
    this.handleYChange = this.handleYChange.bind(this);
  }

  handleXChange(event) {
    this.setState({x: event.target.value})
  }

  handleYChange(event) {
    this.setState({y: event.target.value})
  }

  render () {
    const {data} = this.props
    return (
      <div>
        <Scatterplot data={data.map(player => ({...player, color: TEAM_COLORS[player.teamAbbreviation], x: player[this.state.x], y: player[this.state.y]}))} x={this.state.x} y={this.state.y} />
        <SelectAxes x={this.state.x} y={this.state.y} handleXChange={this.handleXChange} handleYChange={this.handleYChange} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.data.slicedData

  }
}

const TEAM_COLORS = {"ATL": '#CC092F', "BKN": '#000000', "BOS": '#008853', "CHA": '#1D8CAB', "CHI":'#BC032B', "CLE": '#860038', "DAL": '#1061AC',
                     "DEN": '#4B90CD', "DET": '#ED174C', "GSW": '#FDB927', "HOU": '#D31145', "IND": '#002D62', "LAC": '#D81D47', "LAL": '#542583', "MEM": '#23375B',
                     "MIA": '#BF2F38', "MIL": '#00461B', "MIN": '#005183', "NOP": '#B5985A', "NYK": '#F48328', "OKC": '#F05333', "ORL" : '#0075BD', "PHI": '#003DA5',
                     "PHX": '#E66226', "POR": '#E13A3E', "SAC": '#724C9F', "SAS": '#84888B', "TOR": '#BE0F34', "UTA": '#00471B', "WAS": '#E51837' }                        

export default connect (mapStateToProps)(VisualizationView)
