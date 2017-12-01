import React, { Component } from 'react'

class Cell extends Component{
	
	render(){
		return (
			<div data-index={this.props.index} className={'Cell ' + this.props.klass}>
			</div>					
		)	
	}
}

export default Cell