const parse = require('url').parse;

module.exports = (url, opts) => {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof url}`);
	}

	opts = opts || {};

	const arr = parse(url).hostname.split('.').reverse();

	if (arr.length === 2) {
		arr.push('www');
	}

	if (opts.name) {
		arr[2] = opts.name;
	}

	return arr.join(opts.glue || '.');
};
