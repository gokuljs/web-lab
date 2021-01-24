k = prompt("enter your string")
console.log(k.length)
for (var i = 0; i < k.length; i++) {
    console.log("hello")
    if (k.charAt(i) == 'a' || k.charAt(i) == 'e' || k.charAt(i) == 'i' || k.charAt(i) == 'o' || k.charAt(i) == 'u') {
        document.write("the first occuring vowel is " + k.charAt(i) + " at position " + i + 1);
        document.write("</br>")
        break
    }
}
num = prompt("enter your number")
num = num.split("").reverse().join("")
document.write("the reversed number is " + num)