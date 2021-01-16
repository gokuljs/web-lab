var k = prompt("enter your string")
console.log(k)
n = k.length
console.log(n)
for (var i = 0; i < n; i++) {
    if (k.charAt(i) == 'a' || k.charAt(i) == 'e') {
        document.write("<p>" + k.charAt(i) + "</p>")
        break
    }
}
var num = prompt("enter the number")
alert(num.split("").reverse().join(""))