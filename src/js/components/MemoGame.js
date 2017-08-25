import React, { Component } from 'react'

import { combineReducers } from 'redux'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import Game from './Game'
import slideGame from '../reducers/reducers'

let store = createStore(slideGame)

class MemoGame extends Component{
	render () {
		return (
			<Provider store={store}>
				<Game/>
			</Provider>		
		)
	}
}

export default MemoGame