// a function to remove punctuation and spaces
var spacePunc = text => text.replace(/\W/g,'');

//a function to convert all characters to lower case
var toLower = text => text.toLowercase();

//export all things
module.exports = {
	spacePunc: spacePunc,
	toLower: toLower
};