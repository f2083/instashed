import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleSide} from '../actions/actions'
import Tile from './Tile'

function mapStateToProps (state) {
	console.log(state)
  return {
  		slideActions: state.slideActions
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSide: () => {
            dispatch(toggleSide());
        }
    }
};

class Game extends Component{
	constructor(props) {
	    super(props)	
	    console.log(arguments)   
	    console.log(props)
	    this.state = props
	    this.handleClick = this.handleClick.bind(this)
	}
	
	render(){
		console.log('game render')
		return (
				<div className='Game'>
					{this.state.slideActions.map((item, key)=> {
						return <Tile key={key} index={key} handleClick={this.handleClick} val={item.value} turned={item.turned}/>
					})}				
				</div>	
		)
	}
	
	handleClick(e){
		console.log('toggleSide 1')
		console.log(this)
		e.target.style.background = 'green'
		this.state.dispatch(toggleSide(parseInt(e.target.dataset.index,10)))
	}
	
	shouldComponentUpdate(){
		console.log('game shouldComponentUpdate')
		return true	
	}
}

export default connect(mapStateToProps)(Game)