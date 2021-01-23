k = prompt("enter the range")
console.log(k)
document.write("<table><tr><th>number</th><th>square</th><th>cubes</th></tr>")
for (var i = 0; i <= k; i++) {
    document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td></tr>")
}
document.write("</table>")