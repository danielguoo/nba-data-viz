import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFilterAndUpdate } from '../actions'
import './Filter.css'

class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {PlayerExperience: "All", PlayerPosition: 'All'}
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
      <div className="Filter-button">
          {Object.keys(FilterCategories).map((name, i) => 
            <div key={i}>
            {name.slice(6)}: 
            {FilterCategories[name].map((option,j)=>
              <span key={j} className={this.state[name] === option ? "Filter-selectedButton": null}> 
                <button onClick={()=>this.handleClick(option, name)}> {option} </button>
              </span>)
          }</div>)}
      </div>
    )
  }
}

const FilterCategories = {"PlayerExperience" : ["Rookie", "Sophomore", "All"], "PlayerPosition" : ['G', 'F', 'C', 'All']}

const mapDispatchToProps = dispatch => {
  return {
    callFilter: (cat,option) => {
      dispatch(addFilterAndUpdate(cat, option === 'All' ? '' : option))
    }
  }
}

export default connect (null, mapDispatchToProps)(Filter)