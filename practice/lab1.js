var screen = document.getElementById("screen");
console.log(screen)
var buttons = document.querySelectorAll("button")
console.log(buttons)
var screentext = " "
for (item of buttons) {
    item.addEventListener('click', function(e) {
        k = e.target.innerText
        if (k === "=") {
            screen.value = eval(screentext);
        } else if (k === "clear") {
            screentext = " "
            screen.value = screentext
        } else {
            screentext = screentext + k
            screen.value = screentext
        }
    })
}