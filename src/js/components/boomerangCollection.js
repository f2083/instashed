import React, { Component } from 'react'
import Boomerang from './Boomerang';

class boomerangCollection extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	resources:[]
	    }
	}

	render(){
		return (<div className='boomerangCollection'>
			{this.state.resources.map(function(item, index){
				return <Boomerang source={item.url} key={index}/>
			})}			
		</div>)
	}

	componentDidMount() {
		var xhr = new XMLHttpRequest();
		var responce;
		httpGet('/images?tags=true')
			.then(function(result){
				responce = JSON.parse(result);
				this.setState({resources: responce.resources});
			}.bind(this));
  	}		

}

export default boomerangCollection