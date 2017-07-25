import React, { Component } from 'react'

class Boomerang extends Component{
	render(){
		return (
			<video className='Boomerang' width="400" height="300" controls="controls" onMouseEnter={this.props.onMouseEnter} loop>
   			<source src={this.props.source}  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
   			A video tag is not supported by your browser. 
  			</video>
  		)		
	}
}

export default Boomerang