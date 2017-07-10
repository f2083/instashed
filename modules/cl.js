var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'f2083', 
  api_key: '451224176951944', 
  api_secret: 'WbAVaGhUuXRYsbZn-j1e7_BeROg' 
});

/*cloudinary.v2.api.resources(function(error, result){console.log(result)});*/

module.exports = function(req, res){
	cloudinary.v2.api.resources(function(error, result){res.send(result)});
};