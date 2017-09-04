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
	    this.state = props
	    this.handleClick = this.handleClick.bind(this)
	}
	
	render(){
		console.log('game render')
		return (
				<div className='Game'>
					{this.props.slideActions.map((item, key)=> {
						return <Tile key={key} index={key} handleClick={this.handleClick}  turned={item.turned}>
						{item.turned?item.value:''}
						</Tile>
					})}				
				</div>	
		)
	}
	
	handleClick(e){
		this.state.dispatch(toggleSide(parseInt(e.target.dataset.index,10)))
		this.checkEquality()
	}
	
	checkEquality(){
		this.propsmap
		return false
	}
}

export default connect(mapStateToProps)(Game)