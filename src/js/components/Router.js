import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ImageCollection from '../components/imageCollection'

class Navigator extends Router{
	render(){
		return	(<Router history={browserHistory}>
			<Route path='/' component={ImageCollection}></Route>
			<Route path='/collection' component={ImageCollection}></Route>    
		</Router>)
	}
}	

export default Navigator