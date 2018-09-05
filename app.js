var fs = require('fs');
var data = fs.readFileSync('a.txt');
//fs.readFile('a.txt', function() {});
//console.log(data.toString())
var arr = data.toString().split('\n');
//console.log(arr[2])
var str;
for (i = arr.length-1; i>=0; i--)
{
  str+=(arr[i]+'\n')
}

fs.writeFile('b.txt', str, function(){});
