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
					{this.props.slideActions.map((item, key)=> {
						return <Tile css={this.state.tileStyles} key={key} index={key} handleClick={this.handleClick} val={item.value} />
					})}				
				</div>	
		)
	}
	
	handleClick(e){
		console.log('toggleSide 1')
		console.log(this)
		e.target.style.background = 'blue'
		this.props.dispatch(actions.toggleSide(parseInt(e.target.dataset.index,10)))
	}
}

export default connect(mapStateToProps)(Game)