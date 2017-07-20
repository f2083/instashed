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
		xhr.open('GET', '/images?resource_type=video', true);
		xhr.send();
		xhr.onreadystatechange = function() { // (3)
		  if (xhr.readyState != 4) return;

		  if (xhr.status === 200) {
		    console.log(xhr.responseText);
		    this.setState({resources:JSON.parse(xhr.responseText).resources})
		  }

		}.bind(this)		
  	}	

}

export default boomerangCollection