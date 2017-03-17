//remove all spaces
var str = "B I O S T A L L"
str = str.replace(/\s/g,'');
//outputs 'BIOSTALL'
//remove all punctuation
str = str.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
         