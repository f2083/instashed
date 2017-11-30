import React, { Component } from 'react'

class Cell extends Component{
	
	render(){
		return (
			<div data-index={this.props.index} className={'Cell '}>
			Cell
			</div>					
		)	
	}
}

export default Cell