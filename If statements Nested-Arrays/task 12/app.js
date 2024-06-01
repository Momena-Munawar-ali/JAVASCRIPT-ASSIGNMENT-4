var colorFirst = prompt("Enter color");
var colorLast = prompt("Enter one more color");
var col=["black","pink","purple","blue"]

col.unshift(colorFirst)
col.push(colorLast)
col.unshift("yellow","skyBlue")
col.shift()
col.pop()
var addIndex = +prompt("Enter index no. at which you want to add color");
var addColor = prompt("Enter color name what you want to add");
col.splice(addIndex,0,addColor,)
var del = +prompt("Enter index no. at which you want to delete color")
var del1 =+prompt("Enter number of deletion")
col.splice(del,del1)
document.write(col)
