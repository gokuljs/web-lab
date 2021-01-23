var screen = document.getElementById("screen")
var buttons = document.querySelectorAll("button")
var screentext = ""
for (item of buttons) {
    item.addEventListener('click', function(e) {
        k = e.target.innerText;
        console.log(k)
        if (k === "=") {

            screen.value = eval(screentext)
        } else if (k === "clear") {
            screentext = ""
            screen.value = screentext
        } else {
            screentext = screentext + k
            screen.value = screentext
        }
    });
}