function StrangeRoot(a)
{
  var a;
  var b = String(Math.pow(a, 2));
  var c;
  if(String(Math.sqrt(a)).length > String(a).length)
  {
    c = String(Math.sqrt(a).toFixed(3));
  }
  else {
    {
      c = Math.sqrt(a)
    }
  }
  for(let i=0; i<b.length; i++)
  {
    for(let j = 0; i<c.length; j++)
    {
      if(b[i]==c[j])
      {
console.log("'a' is strange root number")
return;
      }

      }
    }
    console.log("'a' isn't strong number")
  }

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send(StrangeRoot(Number(req.query.name)))
});
app.listen(5500);
