//define our functions
let normalize = text => text.replace(/\W/g,'').toLowercase();
let sqrt = num => Math.ceil(Math.sqrt(num));
let subdivide = text => {
	// initialize our output variable
	let output =[];

	//figure out how long each "word" should be
	let word_length = sqrt(count(text));

	// figure out how many words there should be
	let num_words = Math.ceil(count(text)/word_length);

	for(let i = 0; i < num_words; i += 1) {
		//add the next word to output
		output.push(text.substring(i * word_length, (i + 1) + word_length));
	}

	return output;
};
let scramble = words => {
	// initialize the output variable
	let scrambled = [];

	// we're going to create a number of words
	// equal to the number of columns, so loop
	// over the columns
	for(let i = 0; i < words[0].length; i += 1) {
		// initialize an empty string to hold our new "word"
		let new_word = '';

		// now loop over every row in the array
		// of input 'words'
		for(let j = 0; j < words.length; j += 1) {
			// add the nth letter from each word to new_word
			new_word += words[j].charAt(i);
		}	

		// add new_word to our array of scrambled words
		scrambled.push(new_word);
	}

	//return the array of scrambled "words"
	return scrambled;
};

//export all the things
module.exports = {
	// remove punctuation, spaces and convert to lower case
	normalize: normalize,
	// count all of the characters in a message
	count: count,
	// get square root or next highest integer
	sqrt: sqrt,
	// break it up
	subdivide: subdivide
	// take the nth letter from each row and make new words
	scramble: scramble
};