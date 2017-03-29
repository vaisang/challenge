//define our functions
let normalize = text => text.replace(/\W/g,'').toLowercase();
let count = text => text.length;
let sqrt = num => Math.ceil(Math.sqrt(num));
let subdivide = text => {
	//figure out how long each "word" should be
	let word_length = sqrt(count(text));

	// get the first "word"
	let word1 = text.substring(0, word_length);
	let word2 = text.substring(word_length, 2 * word_length);
	let word3 = text.substring(2 * word_length, 3 * word_length);
	let word4 = text.substring(3 * word_length, 4 * word_length);
	console.log(word3);

	for ( /* initialization */; /* end condition */; /* incremeter */) {

	}
};

//export all things
module.exports = {
	// remove punctuation, spaces and convert to lower case
	normalize: normalize,
	// count all of the characters in a message
	count: count,
	// get square root or next highest integer
	sqrt: sqrt,
	// break it up
	subdivide: subdivide
};