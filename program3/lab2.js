console.log("lab3 three program for text shrinking and text ")
var message = document.getElementById("test")
console.log(message)
console.log("content ot be inceased and shrinked", message.innerText)
var var1 = setInterval(increasing, 1000)
    // setinterval attribute repeatedly calls the fucntion 
var starting = 5; // intial value
var ending = 50; // final value

function increasing() {
    message.setAttribute('style', 'font-size:' + starting + "px; color:red;")
    starting = starting + 5;
    if (starting > ending) {
        clearInterval(var1);
        var2 = setInterval(decreasing, 1000)

    }
}

function decreasing() {
    ending = ending - 5;
    message.setAttribute('style', 'font-size:' + ending + 'px; color:blue;');
    if (ending === 5) {
        clearInterval(var2);
        var var1 = setInterval(increasing, 1000)

    }
}