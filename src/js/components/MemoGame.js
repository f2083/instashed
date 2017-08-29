import React, { Component } from 'react'

import { combineReducers } from 'redux'
import { createStore} from 'redux'
import { Provider } from 'react-redux'

import Game from './Game'
import slideGame from '../reducers/reducers'

const initialState = {slideActions:[
	{turned: false,
		value: 1	},
	{turned: false,
		value: 2	},
	{turned: false,
		value: 4	},
	{turned: false,
		value: 3	},
	{turned: false,
		value: 5	},
	{turned: false,
		value: 3	},
	{turned: false,
		value: 6	},
	{turned: false,
		value: 5	},
	{turned: false,
		value: 2	},
	{turned: false,
		value: 6	},
	{turned: false,
		value: 4	},
	{turned: false,
		value: 1	},
]}
let store = createStore(slideGame, initialState)

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