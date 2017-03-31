//import code to be tested
var cryptoSquare = require("../index");

describe("A program to implement a crypto square algorithm", () => {

	it("can normalize a block of text", () => {
		expect(cryptoSquare.normalize("A sentence without spaces."))
			.toBe("asentencewithoutspaces");
		expect(cryptoSquare.normalize("Another sentence without spaces."))
			.toBe("anothersentencewithoutspaces")
		expect(cryptoSquare.normalize('"Egad!", he said. "Don\'t do that!" "What?"'))
			.toBe('egadhesaiddontdothatwhat');
	});

	it("can count the number of characters in a message", () => {
		expect(cryptoSquare.count("hello")).toBe(5);
	});
	
	it("can calculate the square root of a number or next highest integer", () => {
		expect(cryptoSquare.sqrt(4)).tobe(2);
		expect(cryptoSquare.sqrt(5)).toBe(3);
	});

	it("can subdivide a message up into 'words' using the sqrt() value", () => {
		expect(cryptoSquare.subdivide("asentencewithoutspaces"))
			.toEqual(["asent","encew","ithou","tspac","es"]);
		expect(cryptoSquare.subdivide("anothersentencewithoutspaces"))
			.toEqual(["anothe", "rsente", "ncewit", "houtsp", "aces"]);
	});
		
});
	
