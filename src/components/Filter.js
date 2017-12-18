import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFilterAndUpdate } from '../actions'
import './Filter.css'

class Filter extends Component {
  constructor(props){
    super(props)
    this.state = {PlayerExperience: "All", PlayerPosition: 'All', DraftYear:'All',Season:"2017-18"}
  }

  handleClick = (option,category) => {
    this.setState({[category]: option})
    this.props.callFilter(category,option)
  }

  // handleYChange(event) {
  //   this.setState({y: event.target.value})
  // }

  render () {
    const {open} = this.props
    return (
      <div log={console.log(this.props)} className="Sidebar">
          <div className= {open ? null : "closedSidebar"}> 
          <h2> Filter Options </h2>
          <div className="Filter-button">
              {Object.keys(FilterCategories).map((name, i) => 
                <div key={i}>
                <div className="Filter-title"> <h3> {name}: </h3> </div>
                {FilterCategories[name].map((option,j)=>
                  <span key={j} className={this.state[name] === option ? "Filter-selectedButton": null}> 
                    <button onClick={()=>this.handleClick(option, name)}> {option} </button>
                  </span>)
              }</div>)}
          </div>
        </div>
      </div>
    )
  }
}

const FilterCategories = {"PlayerExperience" : ["Rookie", "Sophomore", "All"], "PlayerPosition" : ['G', 'F', 'C', 'All'], 
                          "DraftYear": [2016, 2017, "All"], "Season": ["2015-16", "2016-17", "2017-18"]}

const mapDispatchToProps = dispatch => {
  return {
    callFilter: (cat,option) => {
      dispatch(addFilterAndUpdate(cat, option === 'All' ? '' : option))
    }
  }
}

export default connect (null, mapDispatchToProps)(Filter)