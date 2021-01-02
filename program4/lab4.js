str = prompt("enter a string to find out the left most vowel")
console.log(str)

for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' ||
        str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
        str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U') {
        document.write("The entered string is:" + str + "<br/>");
        document.write("The leftmost vowel is :" + str.charAt(i) + "<br/>");
        var pos = i + 1;
        document.write("The position of the leftmost vowel " + str.charAt(i) + " is:" + pos + "\n");
        break
    }
}

number = prompt("enter your number to print it in reverse order")
document.write("<br/>the reversed number is " + number.split("").reverse().join(""))

// document.write("reverse of a given number is" + number.reverse())