import React, { Component } from 'react'
import Cell from '../components/Cell'
import ticTacToeAiEngine from 'tic-tac-toe-ai-engine'
window.ticTacToeAiEngine = ticTacToeAiEngine 

class TicTacToe extends Component{
	constructor(props) {
	    super(props)
	    this.state = {
	    	cells: ['','','','','','','','',''],
	    	symbol: 'X',
	    	cpuTurn: false
	    }
	    this.handleClick = this.handleClick.bind(this)
	}
	
	render () {
		return (
				<div className='TicTacToe' onClick={this.handleClick}>
					<div className='Board'>
						{this.state.cells.map((item, key)=> {
							return <Cell key={key} index={key} klass={item}>
							</Cell>
						})}	
					</div>							
				</div>	
		)
	}
	
	componentDidUpdate () {
		if (this.state.cpuTurn) {
			let gameState = ticTacToeAiEngine.computeMove(this.state.cells).nextBestGameState
			this.setState({cells: gameState, cpuTurn: false})
		}
	}

	handleClick (e) {
		let index = e.target.dataset.index
		let arr = this.state.cells

		if(/x|o/i.test(e.target.className)){
			return
		}

		arr[index] = this.state.symbol
		this.setState({cells: arr, cpuTurn: true})
	}			
}	

export default TicTacToe