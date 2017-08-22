import React, { Component } from 'react'

import { combineReducers } from 'redux'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import slideGame from '../reducers/reducers'
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

let store = createStore(slideGame)

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
			<Provider store={store}>
				<div className='Game' style={sceneStyles}>
					{this.state.tiles.map((item, key)=> {
						return <Tile css={this.state.tileStyles} key={key} handleClick={this.handleClick}/>
					})}				
				</div>
			</Provider>		
		)
	}
	
	handleClick(e){
		console.log('toggleSide 1')
		e.target.style.background = 'blue'
		store.dispatch(actions.toggleSide(1))
	}
}

export default Game