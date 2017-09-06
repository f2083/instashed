import React, { Component } from 'react'

import { combineReducers } from 'redux'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import Game from './Game'
import slideGame from '../reducers/reducers'

var initialState = {slideActions:[
	{turned: false,
		fixed: false,
		value: 1	},
	{turned: false,
		fixed: false,
		value: 2	},
	{turned: false,
		fixed: false,
		value: 4	},
	{turned: false,
		fixed: false,
		value: 3	},
	{turned: false,
		fixed: false,
		value: 5	},
	{turned: false,
		fixed: false,
		value: 3	},
	{turned: false,
		fixed: false,
		value: 6	},
	{turned: false,
		fixed: false,
		value: 5	},
	{turned: false,
		fixed: false,
		value: 2	},
	{turned: false,
		fixed: false,
		value: 6	},
	{turned: false,
		fixed: false,
		value: 4	},
	{turned: false,
		fixed: false,
		value: 1	},
]}
const store = createStore(slideGame, initialState)

class MemoGame extends Component{	
	render () {
		return (
			<Provider store={store}>
				<Game />
			</Provider>		
		)
	}
}

export default MemoGame