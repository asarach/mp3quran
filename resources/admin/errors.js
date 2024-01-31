class Errors {
	constructor() {
		this.errors = {};
	}
	get(field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}
	all() {
		return this.errors;
	}
	record(error) {
		if (error.response == undefined) {
			this.errors = {}
		} else {
			this.errors = error.response.data.errors
		}
	}
	has(field) {
		return this.errors.hasOwnProperty(field);
	}
	clear(field) {
		delete this.errors[field];
	}
};
module.exports = Errors;
