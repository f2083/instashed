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
	    	planeStyles: {
				position: 'absolute',
				width: '50px',
				height: '50px',
				backgroundColor: 'red',
				bottom: '2%',
				left: '49%',
				margin: 'auto'
			}
	    }
	    this.handleKey = this.handleKey.bind(this)
	}
	
	componentWillMount(){
		document.body.addEventListener('keydown',this.handleKey.bind(this))
	}
	
	render(){
		return (
			<div className='Game' style={sceneStyles}>
				<Plane css={this.state.planeStyles}/>
			</div>		
		)
	}
	
	componentWillUnmount(){
		document.body.addEventListener('keydown',this.handleKey.bind(this))
	}
	
	handleKey(e){
		console.log('key')
		if(e.keyCode === 37){
			let newleft = parseInt(this.state.planeStyles.left) - 1 + '%'
			this.setState({ planeStyles: Object.assign(this.state.planeStyles, {left: newleft}) })
		}
		if(e.keyCode === 39){
			let newleft = parseInt(this.state.planeStyles.left) + 1 + '%'
			this.setState({ planeStyles: Object.assign(this.state.planeStyles, {left: newleft}) })
		}
	}
}

export default Game