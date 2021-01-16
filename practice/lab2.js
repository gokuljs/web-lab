var val = prompt("enter the value")
console.log(val)
document.write("<table><tr><th>Number</th><th>square</th><th>cubes</th></tr>")
for (var i = 0; i < val; i++) {
    document.write("<tr><th>" + i + "</th><th>" + i * i + "</th><th>" + i * i * i + "</th></tr>")
}
document.write("</table")