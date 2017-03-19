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
}