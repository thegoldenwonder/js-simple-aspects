/*
Implement some simple Aspect Oriented Programming methods for JS.
*/

module.exports = {
	before: before,
	after: after,
	afterReturn: afterReturn,
	afterThrow: afterThrow,
	around: around
}

function before(target, advice)  {
	// run the advice before invoking target
	return function () {
		advice.apply(this, arguments);
		return target.apply(this, arguments);
	}
}

function after(target, advice) {
	// run the advice after target completes, passing it the error or result
	return function () {
		let error, result;
		try {
			result = target.apply(this, arguments);
		} catch (e) {
			error = e;
		}

		// advice params: the error and result values, and target's arguments passed as an array
		advice.call(this, error, result, Array.prototype.slice.call(arguments));

		if (error) {
			throw error;
		} else {
			return result;
		}
	}
}

function afterReturn(target, advice) {
	// run the advice taking account of the returned value
	return function () {
		let result = target.apply(this, arguments);
		advice.call(this, result);
		return result;
	}
}

function afterThrow(target, advice) {
	// run the advice when target throws an error
	return function () {
		try {
			return target.apply(this, arguments);
		} catch (e) {
			advice.call(this, e);
			throw e;
		}
	}
}

function around(target, advice) {
	// run advice passing in the target as well as its arguments
	// NB: make sure target is bound to the actual invoked function, namely the one we return here
	return function () {
		return advice.call(this, target.bind(this), Array.prototype.slice.call(arguments))
	}
}
