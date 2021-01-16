var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button")
var screentext = "";
screen.value = ""
console.log(buttons)
for (item of buttons) {
    item.addEventListener('click', function(e) {
        // console.log("button clicked");
        var buttontext = e.target.innerText;
        // console.log(buttontext)
        if (buttontext == "clear") {
            screentext = "";
            screen.value = screentext;
        } else if (buttontext == "=") {
            screen.value = eval(screentext)
        } else {
            screentext = screentext + buttontext
            screen.value = screentext
        }
    });

}