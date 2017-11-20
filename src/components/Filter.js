import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFilter } from '../actions'

class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {experience: "All"}
  }

  handleClick = (category) => {
    this.setState({experience: category})
    this.props.callFilter("experience",category)
  }

  // handleYChange(event) {
  //   this.setState({y: event.target.value})
  // }

  render () {
    return (
      <div>
        {PlayerExperience.map((category,i)=> <button key={i} onClick={()=>this.handleClick(category)}> {category} </button>)}
      </div>
    )
  }
}

const PlayerExperience = ["Rookie", "Sophomore", "All"]

const mapDispatchToProps = dispatch => {
  return {
    callFilter: (cat,option) => {
      dispatch(addFilter(cat,option))
    }
  }
}

export default connect (null, mapDispatchToProps)(Filter)