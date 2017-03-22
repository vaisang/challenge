var spaceremover = (text) => {
	return 'Asentencewithoutspaces.';
};

//export spaceremover for use in other contexts 
module.exports = spaceremover;
// import the code to be tested
var spaceremover = require("../index");

describe("A program to implement a crypto square algorithm"), () => {

	it("can remove all spaces from a block of text", () => {
		expect(spaceremover("A sentence wihtout spaces."))
			.toBe("Anothersentencewithoutspaces.");
});

};

{
	"spec_dir": "spec",
	"spec_files": [
		"**/*[sS]pec.js"
	],
	"stopSpecOnExpectationFailure": false,
	"random": false
};
//remove all spaces from some input text
var spaceremover = text => text.replace(/\s/g,'');

function punctuationremover(text) {
	return text.replace(/\W/g,'');
}

module.exports = spaceremover;
module.exports = punctuationremover;

//import the spacremover function from our
//main program file (p1.js)
var spaceremover = require('../index');

describe("A program to implement a crypto square cypher", () => {
	.toBe("Anothersentencewithoutspaces.");
});

it("can remove all punctuation from some text", () => {
	expect(punctuationremover("Egad! Watson you done fucked up. no punctuation?..."))
		.toBe("Egad Watson tis this no punctuation");
});