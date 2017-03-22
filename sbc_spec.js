//import code to be tested
var spacePunc = require("../index");

describe("A program to implement a crypto square algorithm", () => {

	it("can remove all punctuation and spaces from a block of text", () => {
		expect(spacePunc("A sentence without spaces."))
			.toBe("Asentencewithoutspaces");
		expect(spacePunc("Another sentence without spaces."))
			.toBe("Anothersentencewithoutspaces")
	})
})