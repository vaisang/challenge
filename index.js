//export all things
module.exports = {
	// a function to remove punctuation and spaces
	// space and convert to lower case

	normalize: text => text.replace(/\W/g,'').toLowercase();
};