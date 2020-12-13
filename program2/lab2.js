alert("welcome to program 2")
range = prompt("enter your range");
console.log("hello world");
console.log(range);
if (range == ' ') {
    alert("invalid number");
} else {
    document.write("<table> <th>Number</th><th>square</th><th>cube</th>");
    for (var i = 0; i <= range; i++) {
        document.write("<tr><td>" + i + "</td><td>" + i * i + "</td><td>" + i * i * i + "</td><tr>");
    }
}