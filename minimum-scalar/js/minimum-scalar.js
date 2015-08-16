var fs  = require("fs");
var text = fs.readFileSync(process.argv[2]).toString().split('\n');

var testcases = text[0];

var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  for (var i = 1; i < text.length - 1; i+= 3) {
    first_aray = text[i + 1].split(' ').sort((function(a, b){return a-b}));;
    second_aray = text[i + 2].split(' ').sort((function(a, b){return b-a}));;

    var res = 0;
    for (var j = 0; j < first_aray.length; j++) {
      res += first_aray[j] * second_aray[j];
    }

  stream.write("Case #" + parseInt((i/3)+ 1) + ": " +res+"\n");
    //console.log("Case #" + parseInt((i/3)+ 1) + ": " +res);

  }


  stream.end();


});
