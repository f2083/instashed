var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'f2083', 
  api_key: '451224176951944', 
  api_secret: 'WbAVaGhUuXRYsbZn-j1e7_BeROg' 
});

/*
https://api.cloudinary.com/v1_1/f2083/resources/image?tags=true;
tags: true            return resources with tags
resource_type:'video' return all videos

*/

module.exports = function(req, res){
	cloudinary.v2.api.resources(req.query,function(error, result){res.send(result)});
};