import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Store from '../store/Store'
import Game from './Game'


class MemoGame extends Component{	
	render () {
		return (
			<Provider store={Store}>
				<Game />
			</Provider>		
		)
	}
}

export default MemoGame