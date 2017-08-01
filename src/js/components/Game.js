import React, { Component } from 'react'
import Plane from './Plane';

const sceneStyles = {
	position: 'relative',
	overflow: 'hidden',
	width: '500px',
	height: '500px',
	backgroundColor: 'gray',
	border: '1px solid black'
}

class Game extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	resources:[]
	    }
	    this.handleClick = this.handleClick.bind(this)
	    this.handleKey = this.handleKey.bind(this)
	}
	
	render(){
		return (
			<div className='Game' style={sceneStyles} onClick={this.handleClick} onKeyUp={this.handleKey}>
				<Plane/>
			</div>		
		)
	}
	
	handleClick(e){
		console.log('click')
	}
	
	handleKey(e){
		console.log('key')
	}
}

export default Game