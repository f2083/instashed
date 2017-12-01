import React, { Component } from 'react'
import Cell from '../components/Cell'
import ticTacToeAiEngine from 'tic-tac-toe-ai-engine'
window.ticTacToeAiEngine = ticTacToeAiEngine 

class TicTacToe extends Component{
	constructor(props) {
	    super(props)
	    this.state = {
	    	cells: ['x','','','','o','','','','']
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

	handleClick (e) {
		let index = e.target.dataset.index
		let arr = this.state.cells

		if(/x|o/i.test(e.target.className)){
			return
		}

		arr[index] = 'x'
		this.setState({cells: arr})
	}			
}	

export default TicTacToe