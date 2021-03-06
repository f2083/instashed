import React, { Component } from 'react'
import { Router, Route } from 'react-router'
import boomerangCollection from '../components/boomerangCollection'
import TicTacToe from '../components/TicTacToe'
import Game from '../components/Game'
import MemoGame from '../components/MemoGame'


class Navigator extends Router{
	render(){
		return	(<Router history={this.props.history}>
          <Route path='/' component={MemoGame}></Route>
          <Route path='boomerangs' component={boomerangCollection}></Route> 
          <Route path='tictactoe' component={TicTacToe}></Route>
          <Route path='game' component={MemoGame}></Route>      
        </Router>)
	}
}	

export default Navigator