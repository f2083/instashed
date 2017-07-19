var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'f2083', 
  api_key: '451224176951944', 
  api_secret: 'WbAVaGhUuXRYsbZn-j1e7_BeROg' 
});

/*cloudinary.v2.api.resources(function(error, result){console.log(result)});
https://api.cloudinary.com/v1_1/f2083/resources/image?tags=true;
*/

module.exports = function(req, res){
	cloudinary.v2.api.resources({tags: true },function(error, result){res.send(result)});
};