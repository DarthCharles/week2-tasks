var numpad = [
  " ",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz"
];

var word = 'hello world'
var res = '';
var prev_char = '';

for (var i = 0; i < word.length; i++) {
  var char =  word.charAt(i);
  for (var j = 0; j < numpad.length; j++) {
    if (numpad[j].indexOf(char) > -1) {
      if (prev_char === j) res += ' ';
      var num_index = numpad[j].indexOf(char);
      for (var k = 0; k < num_index + 1; k++) {
        res += j;
      }
      prev_char = j
    }
  }
}

console.log(res);
console.log('4433555 555666096667775553');
