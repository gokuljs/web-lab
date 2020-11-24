var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
var screenvalue = ""
    // The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    // here it writtens all the buttons 
    // now we have to loop through all the buttons using for of loop
for (item of buttons) {
    // now create an eventlistener for all the buttons we 
    item.addEventListener('click', (e) => {
        // creating an eventlistner click for the buttons
        // whenever we click on those buttons we are trying to get innertext of those buttons
        var buttontext = e.target.innerText
        console.log(buttontext)
        if (buttontext == "clear") {
            screenvalue = ""
            screen.value = screenvalue;
        } else if (buttontext == "=") {
            screen.value = eval(screenvalue);
        } else {
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
    });
}