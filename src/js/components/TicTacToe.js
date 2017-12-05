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
	    	cpuTurn: false,
	    	winner: null 
	    }
	    this.handleClick = this.handleClick.bind(this)
	}
	
	render () {
		return (
				<div className='TicTacToe' onClick={this.handleClick}>
					<button className={'tttBtn' + 'hidden'}>Play Again</button>
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
		let winner = ticTacToeAiEngine.determineWinner(this.state.cells)

		if(this.state.winner){
			return setTimeout(function(){alert('winner')}, 500)
		}

		if (winner) {
			return this.setState({winner: winner, cpuTurn: true})
		}

		if (this.state.cpuTurn) {
			let gameState = ticTacToeAiEngine.computeMove(this.state.cells).nextBestGameState
			return this.setState({cells: gameState, cpuTurn: false})
		}
	}

	handleClick (e) {
		let index = e.target.dataset.index
		let arr = this.state.cells

		if(/x|o/i.test(e.target.className) || this.state.winner){
			return
		}

		arr[index] = this.state.symbol
		this.setState({cells: arr, cpuTurn: true})
	}			
}	

export default TicTacToe