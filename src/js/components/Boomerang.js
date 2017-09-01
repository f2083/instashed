import React, { Component } from 'react'
const hhh = 1===true
class Boomerang extends Component{
	render(){
		return (
			<video className='Boomerang' width="400" height="300" controls="controls" onMouseLeave={this.props.onMouseLeave} onMouseEnter={this.props.onMouseEnter} loop>
   			<source src={this.props.source}  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
   			A video tag is not supported by your browser. 
  			</video>
  		)		
	}
}

export default Boomerang