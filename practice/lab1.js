console.log("building a simple calculator")
var screen = document.getElementById("screen");
//getElementById returns the elment value which has attribute id
var buttons = document.querySelectorAll("button")
    //querySelectorAll  will return elemnts which specified group os selectors 
console.log("hello");
console.log(buttons)
for (item of buttons) {
    console.log(item)
    item.addEventListener('click', function() {
        console.log("button clicked");
    });
}