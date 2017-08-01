import React, { Component } from 'react'

let planeStyles = {
	position: 'absolute',
	width: '50px',
	height: '50px',
	backgroundColor: 'red',
	bottom: '2%',
	right: 0,
	left: 0,
	margin: 'auto'
}

class Plane extends Component{
	render(){
		return (
			<div className='Plane' style={planeStyles} >
			</div>		
		)	
	}
}

export default Plane