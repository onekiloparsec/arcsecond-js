import service from './service';

function arcsecond(apiVersion) {
	const arcsecondService = service(apiVersion);
	return arcsecondService;
}

export default arcsecond;
