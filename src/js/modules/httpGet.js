export default function httpGet(url) {
	function sendRequest(resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.onerror = function() {
      	reject(new Error('Network Error'));
    	};
    	xhr.onload = function() {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
		
		xhr.open('GET', url, true);
		xhr.send();
		
	}
	return new Promise(sendRequest)
}