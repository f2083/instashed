import React, { Component } from 'react'
import Cell from '../components/Cell'
import ticTacToeAiEngine from 'tic-tac-toe-ai-engine'
window.ticTacToeAiEngine = ticTacToeAiEngine 

class TicTacToe extends Component{
	constructor(props) {
	    super(props)
	    this.state = {
	    	cells: ['','','','','','','','','']
	    }
	}
	
	render () {
		return (
				<div className='TicTacToe'>
					<div>Board</div>	
					{this.state.cells.map((item, key)=> {
						return <Cell key={key} index={key} >
						</Cell>
					})}								
				</div>	
		)
	}			
}	

export default TicTacToe