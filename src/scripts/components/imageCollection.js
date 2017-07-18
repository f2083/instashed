import React, { Component } from 'react'
import CloudImage from './cloudImage';

class ImageCollection extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	resources:[]
	    }
	}

	render(){
		return (<div className='image-collection'>
			{this.state.resources.map(function(item, index){
				return <CloudImage source={item.url} key={index}/>
			})}			
		</div>)
	}

	componentDidMount() {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', '/images', true);
		xhr.send();
		xhr.onreadystatechange = function() { // (3)
		  if (xhr.readyState != 4) return;

		  if (xhr.status === 200) {
		    console.log(xhr.responseText);
		    this.setState({resources:xhr.responseText.resources})
		  }

		}.bind(this)		
  	}	

}

export default ImageCollection