import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'
import Tile from './Tile'

const sceneStyles = {
	position: 'relative',
	overflow: 'hidden',
	width: '500px',
	height: '500px',
	backgroundColor: 'gray',
	border: '1px solid black'
}

function mapStateToProps (state) {
  return state
}

class Game extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	tileStyles: {
				width: '32%',
				height: '24%',
				backgroundColor: 'red',
				display: 'inline-block',
				border: '1px solid black'
			},
			tiles: [
				[],[],[],[],[],[],[],[],[],[],[],[]
			]
	    }
	    this.handleClick = this.handleClick.bind(this)
	}
	
	render(){
		return (
				<div className='Game' style={sceneStyles}>
					{this.state.tiles.map((item, key)=> {
						return <Tile css={this.state.tileStyles} key={key} handleClick={this.handleClick}/>
					})}				
				</div>	
		)
	}
	
	handleClick(e){
		console.log('toggleSide 1')
		console.log(this.props)
		e.target.style.background = 'blue'
		this.props.dispatch(actions.toggleSide(1))
	}
}

export default connect(mapStateToProps)(Game)