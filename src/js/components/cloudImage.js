import React, { Component } from 'react'

class CloudImage extends Component{
	render(){
		return (<div className="CloudImage">
			<img src={this.props.source} alt='' width='300' height='auto' onDrag={this.props.onDrag}/>
		</div>)
	}
}

export default CloudImage