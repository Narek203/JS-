var a=""
var b = ""
var arr1 =[]
var arr2 = []
for(var i=0;i<5;i++)
{
  arr1[i] = a[i]
}
for(var j = 0; j<5; j++)
{
  arr2[j] = b[j]

}
arr1.sort()
arr2.sort()
for(var k =0; k<5; k++)
{
  if(arr1[k]!=arr2[k])
  {
  console.log("is not unique")
    return;
  }

}
console.log("unique")
