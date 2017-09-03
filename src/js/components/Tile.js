import React, { Component } from 'react'

class Tile extends Component{
	
	render(){
		console.log('render')
		return (
			<div onClick={this.props.handleClick} data-index={this.props.index} className={'Tile '+this.props.turned}>
			{this.props.val}
			</div>					
		)	
	}
}

export default Tile