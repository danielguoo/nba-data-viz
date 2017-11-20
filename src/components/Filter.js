import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFilterAndUpdate } from '../actions'

class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {playerExperience: "All", PlayerPosition: 'All'}
  }

  handleClick = (option,category) => {
    this.setState({[category]: option})
    this.props.callFilter(category,option)
  }

  // handleYChange(event) {
  //   this.setState({y: event.target.value})
  // }

  render () {
    return (
      <div>
        <br/>
        {PlayerExperience.map((option,i)=> <button key={i} onClick={()=>this.handleClick(option, "PlayerExperience")}> {option} </button>)}
        <br/> <br/>
        {PlayerPosition.map((option,i)=> <button key={i} onClick={()=>this.handleClick(option, "PlayerPosition")}> {option} </button>)}
      </div>
    )
  }
}

const PlayerExperience = ["Rookie", "Sophomore", "All"]
const PlayerPosition = ['G', 'F', 'C', 'All']

const mapDispatchToProps = dispatch => {
  return {
    callFilter: (cat,option) => {
      dispatch(addFilterAndUpdate(cat, option === 'All' ? '' : option))
    }
  }
}

export default connect (null, mapDispatchToProps)(Filter)