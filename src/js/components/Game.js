import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleSide, hideAll} from '../actions/actions'
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
            dispatch(toggleSide())
        },
        hideAll: () => {
				dispatch(hideAll())        
        }
    }
};

class Game extends Component{
	constructor(props) {
	    super(props)
	    this.state = props
	    this.handleClick = this.handleClick.bind(this)
	}
	
	componentDidUpdate() {
		this.checkEquality()
	}
	
	render () {
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
	
	handleClick (e) {
		console.log('dispatch')
		this.state.dispatch(toggleSide(parseInt(e.target.dataset.index,10)))
	}
	
	checkEquality () {
		let turnedTiles = this.props.slideActions.filter((item)=>{
			return item.turned		
		})
		if(turnedTiles.length && turnedTiles.length%2 === 0){
			if(turnedTiles[0].value === turnedTiles[1].value){alert('win!}')
			return turnedTiles[0].value === turnedTiles[1].value}
			setTimeout(
				function(){this.state.dispatch(hideAll(1))}.bind(this),			
				1000
			)
		}
		
		return false	
	}	
}

export default connect(mapStateToProps)(Game)