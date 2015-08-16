var dictionary = ["abc",
"bca",
"dac",
"dbc",
"cba"];



var str = "abc";

for (var i = 0; i < dictionary.length; i++) {
  var str = dictionary[i];
  var patt1 =/[ab][bc][ca]/g
  var matches = str.match(patt1);

  console.log(matches);
}

// [ab][bc][ca]
// abc
// (abc)(abc)(abc)
// (zyx)bc
