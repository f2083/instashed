import React, { Component } from 'react'

	
	
class Tile extends Component{
	
	render(){
		let turned = this.props.turned ? 'turned' : ''
		console.log('render')
		return (
			<div onClick={this.props.handleClick} data-index={this.props.index} className={'Tile '+ turned}>
			{this.props.children}
			</div>					
		)	
	}
}

export default Tile