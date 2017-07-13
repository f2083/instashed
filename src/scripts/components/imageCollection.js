import React, { Component } from 'react'
import CloudImage from './cloudImage';

class ImageCollection extends Component{
	constructor(props) {
	    super(props)
	    this.state = { 
	    	resources:[
	    		{"public_id":"20160507_185408_ek207h","format":"jpg","version":1497469453,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:44:13Z","bytes":3485658,"width":2304,"height":4096,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497469453/20160507_185408_ek207h.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497469453/20160507_185408_ek207h.jpg"},
	    		{"public_id":"20160508_132500_yvicll","format":"jpg","version":1497469361,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:42:41Z","bytes":2880380,"width":2304,"height":4096,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497469361/20160508_132500_yvicll.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497469361/20160508_132500_yvicll.jpg"},
	    		{"public_id":"20160828_174807_b55lsj","format":"jpg","version":1497469125,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:38:45Z","bytes":3717822,"width":2304,"height":4096,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497469125/20160828_174807_b55lsj.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497469125/20160828_174807_b55lsj.jpg"},
	    		{"public_id":"20160828_174717_bkgcu0","format":"jpg","version":1497469083,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:38:03Z","bytes":3817465,"width":2304,"height":4096,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497469083/20160828_174717_bkgcu0.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497469083/20160828_174717_bkgcu0.jpg"},
	    		{"public_id":"20160828_200057_l0g5tg","format":"jpg","version":1497468947,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:35:47Z","bytes":178328,"width":2864,"height":432,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497468947/20160828_200057_l0g5tg.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497468947/20160828_200057_l0g5tg.jpg"},
	    		{"public_id":"20160828_195938_cbrud9","format":"jpg","version":1497468947,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:35:47Z","bytes":198711,"width":2208,"height":400,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497468947/20160828_195938_cbrud9.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497468947/20160828_195938_cbrud9.jpg"},
	    		{"public_id":"20161015_110523_zzqo0t","format":"jpg","version":1497468815,"resource_type":"image","type":"upload","created_at":"2017-06-14T19:33:35Z","bytes":5663166,"width":2304,"height":4096,"backup":true,"url":"http://res.cloudinary.com/f2083/image/upload/v1497468815/20161015_110523_zzqo0t.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497468815/20161015_110523_zzqo0t.jpg"},
	    		{"public_id":"sample","format":"jpg","version":1497377515,"resource_type":"image","type":"upload","created_at":"2017-06-13T18:11:55Z","bytes":109669,"width":864,"height":576,"url":"http://res.cloudinary.com/f2083/image/upload/v1497377515/sample.jpg","secure_url":"https://res.cloudinary.com/f2083/image/upload/v1497377515/sample.jpg"}
	    	]
	    }
	}

	render(){
		return (<div className='image-collection'>
			{this.state.resources.map(function(item, index){
				return <CloudImage source={item.url} key={index}/>
			})}			
		</div>)
	}
}

export default ImageCollection