import React, { Component } from 'react'

class Tile extends Component{
	
	render(){
		let turned = this.props.turned ? 'turned' : ''
		return (
			<div onClick={this.props.handleClick} data-index={this.props.index} className={'Tile '+ turned + ' pic' + this.props.val}>
			</div>					
		)	
	}
}

export default Tile