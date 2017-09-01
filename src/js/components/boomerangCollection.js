import React, { Component } from 'react'
import Boomerang from './Boomerang'
import httpGet from '../modules/httpGet'

class boomerangCollection extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	resources:[]
	    }
	    this.mouseEnterHandler = this.mouseEnterHandler.bind(this)
	    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this)
	}

	render(){
		return (<div className='boomerangCollection'>
			{this.state.resources.map(function(item, index){
				return <Boomerang source={item.url} key={index} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}/>
			}.bind(this))}			
		</div>)
	}

	componentDidMount() {
		var xhr = new XMLHttpRequest();
		var responce;
		httpGet('/images?resource_type=video')
			.then(function(result){
				responce = JSON.parse(result);
				this.setState({resources: responce.resources});
			}.bind(this));
  	}	
  	
  	mouseEnterHandler(event){
  		event.target.play()
  	}	
  	
	mouseLeaveHandler(event){
  		event.target.pause()
  	}	

}

export default boomerangCollection