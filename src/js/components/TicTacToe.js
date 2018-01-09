import React, { Component } from 'react'
import Cell from '../components/Cell'
import ticTacToeAiEngine from '../modules/ttt'
import * as synaptic from 'synaptic'
window.ticTacToeAiEngine = ticTacToeAiEngine 
window.synaptic = synaptic 

window.net = new synaptic.Architect.Perceptron(9, 18, 9)
window.trainer = new synaptic.Trainer(window.net)
var learningRate = .3;
for (var i = 0; i < 20000; i++)
{
	net.activate([0,0,0,0,0,0,0,0,0]);
	net.propagate(learningRate, [0,0,0,0,1,0,0,0,0]);

}


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
	    this.playAgain = this.playAgain.bind(this)
	}
	
	render () {
		return (
				<div className='TicTacToe'>
					<button className='playAgain' onClick={this.playAgain}>
						Play Again!
					</button>
					<span className={this.state.winner?'':'hidden'}>We hame a winner</span>
					<div className='Board' onClick={this.handleClick}>
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
			return false
		}

		if (winner) {
			return this.setState({winner: winner, cpuTurn: true})
		}

		if (this.state.cpuTurn) {
			let gameState = ticTacToeAiEngine.computeMove(this.state.cells).nextBestGameState
			console.log(boardArr)
			var learningRate = .3;
			var boardArr = this.state.cells.map((item) => {
				return item === 'X' && 1 || item === 'O' && 0.5 || 0
			})
			console.log(boardArr)
			var newArr = gameState.map((item) => {
				return item === 'X' && 1 || item === 'O' && 0.5 || 0
			})
			console.log(newArr)
			for (var i = 0; i < 20000; i++)
			{
				net.activate(boardArr);
				net.propagate(learningRate, newArr);

			}
			
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

	playAgain () {
		this.setState({
	    	cells: ['','','','','','','','',''],
	    	symbol: 'X',
	    	cpuTurn: false,
	    	winner: null 
		})
	}				
}	

export default TicTacToe