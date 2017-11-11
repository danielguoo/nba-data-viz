import { connect } from 'react-redux'
import Scatterplot from '../components/Scatterplot'

const mapStateToProps = state => {
  return {
    x: state.x,
    y: state.y
  }
}

const TableView = connect(
  mapStateToProps,
)(Scatterplot)

export default TableView

const TEAM_COLORS = {"ATL": '#CC092F', "BKN": '#000000', "BOS": '#008853', "CHA": '#1D8CAB', "CHI":'#BC032B', "CLE": '#860038', "DAL": '#1061AC',
                     "DEN": '#4B90CD', "DET": '#ED174C', "GSW": '#FDB927', "HOU": '#D31145', "IND": '#002D62', "LAC": '#D81D47', "LAL": '#542583', "MEM": '#23375B',
                     "MIA": '#BF2F38', "MIL": '#00461B', "MIN": '#005183', "NOP": '#B5985A', "NYK": '#F48328', "OKC": '#F05333', "ORL" : '#0075BD', "PHI": '#003DA5',
                     "PHX": '#E66226', "POR": '#E13A3E', "SAC": '#724C9F', "SAS": '#84888B', "TOR": '#BE0F34', "UTA": '#00471B', "WAS": '#E51837' }                        

