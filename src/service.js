import request from 'request';
import restful, { requestBackend } from 'restful.js';

export default function(apiVersion) {
	const service = restful('http://api.arcsecond.io/'+apiVersion, requestBackend(request));
	
	function object(name) {
		return service.one('articles', name)
	}
	
	return service
}
