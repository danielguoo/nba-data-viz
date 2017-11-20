import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, MarkSeries, Hint, HorizontalGridLines, VerticalGridLines} from 'react-vis';

export default class Scatterplot extends Component {
	constructor(props) {
		super(props)
		this.state = {value: null}
		this.rememberValue = this.rememberValue.bind(this)
		this.forgetValue = this.forgetValue.bind(this)
	}

	rememberValue(value) {
		this.setState({value})
	}

	forgetValue() {
		this.setState({value: null})
	}

	render(){
		const {data, x, y} = this.props
		return (
			<XYPlot
        width={800}
        height={500}>
        <HorizontalGridLines/>
        <VerticalGridLines/>
        <XAxis title={x}/>
        <YAxis title={y}/>
        <MarkSeries
        	colorType="literal"
          data={data}
          onValueMouseOver={this.rememberValue}
        	onValueMouseOut={this.forgetValue}/>
        {this.state.value ? 
     		<Hint value={this.state.value}>
  				<div style={{background: this.state.value.color}}>
    				<h3>{this.state.value.playerName}</h3>
  				</div>
				</Hint> : null }
     	</XYPlot>
		);
	}
}

