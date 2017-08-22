import React, { Component } from 'react'

class Tile extends Component{
	render(){
		return (
			<div className='Tile' style={this.props.css} onClick={this.props.handleClick}>
			</div>					
		)	
	}
}

export default Tile