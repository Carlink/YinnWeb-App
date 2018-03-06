import isHttps from '~/plugins/is-https.js';

let options = {
	ignoreFilter: (req) => {
		return (req.url.indexOf('/_ah/health') > -1);
	}
};
let maxAge = options.maxAge ? options.maxAge : 86400;
let includeSubDomains = options.includeSubDomains !== undefined ? options.includeSubdomains : true;
let ignoreRequest = (process.env.NODE_ENV !== "production");


export default function ({req, res, redirect, isClient}) {
	if (isClient) return;
	let secure = req.connection.encrypted || (req.headers['X-Forwarded-Proto'] === "https");
	if (options.ignoreFilter) {
		ignoreRequest = ignoreRequest || options.ignoreFilter(req);
	}

	if (!ignoreRequest) {
		if (!secure) {
			if (!isHttps(req)) {
				console.log('redirecting');
				redirect(302, 'https://' + req.headers['host'] + req.url);
			}
		} else {
			let header = 'max-age=' + maxAge;
			if (includeSubDomains) header += '; includeSubDomains';
			if (options.preload) header += '; preload';
			res.setHeader('Strict-Transport-Security', header);
			// next();
		}
	} else {
		console.log('request ignored');
		// next();
	}
}