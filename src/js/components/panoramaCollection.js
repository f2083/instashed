import React, { Component } from 'react'
import CloudImage from './cloudImage'
import httpGet from '../modules/httpGet'

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
				return <CloudImage source={item.url} key={index} onDrag={this.logger}/>
			}.bind(this))}			
		</div>)
	}

	componentDidMount() {
		var xhr = new XMLHttpRequest();
		var responce;
		var images;
		httpGet('/images?tags=true')
			.then(function(result){
				responce = JSON.parse(result);
				images = responce.resources.filter(function(item){
					if(item.tags.indexOf('panorama') > -1){
						item.url = item.url.replace('/upload', '/upload/a_exif');
						return true;
		    		}
				});
				this.setState({resources: images});
			}.bind(this));
  	}	
  	
  	logger(){
		console.log(arguments)  	
	}
  	

}

export default panoramaCollection