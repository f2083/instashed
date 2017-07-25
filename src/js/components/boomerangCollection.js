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
	}

	render(){
		return (<div className='boomerangCollection'>
			{this.state.resources.map(function(item, index){
				return <Boomerang source={item.url} key={index} onMouseEnter={this.mouseEnterHandler}/>
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
  	
  	mouseEnterHandler(proxy, event){
  		console.log(arguments)
  	}	

}

export default boomerangCollection