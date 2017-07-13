import React, { Component } from 'react'

class CloudImage extends Component{
	render(){
		return <img src={this.props.source} alt='' width='300' height='auto'/>
	}
}

export default CloudImage