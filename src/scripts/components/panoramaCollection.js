import React, { Component } from 'react'
import CloudImage from './cloudImage';

class panoramaCollection extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	resources:[]
	    }
	}

	render(){
		return (<div className='panoramaCollection'>
			{this.state.resources.map(function(item, index){
				return <CloudImage source={item.url} key={index}/>
			})}			
		</div>)
	}

	componentDidMount() {
		var xhr = new XMLHttpRequest();
		var result;
		var images;

		xhr.open('GET', '/images', true);
		xhr.send();
		xhr.onreadystatechange = function() { // (3)
		  if (xhr.readyState != 4) return;

		  if (xhr.status === 200) {
		    result = JSON.parse(xhr.responseText).resources;
		    images = result.filter(function(item){
		    	if(item.tags.indexOf('panorama') > -1){
					item.url = item.url.replace('/upload', '/upload/a_exif');
					return true;
		    	}
		    	return false;
		    });

		    this.setState({resources:images})
		  }

		}.bind(this)		
  	}	

}

export default panoramaCollection