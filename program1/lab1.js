var screen = document.getElementById("screen");
var buttons = document.querySelectorAll("button");
// The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// here it writtens all the buttons 
// now we have to loop through all the buttons using for of loop
for (item of buttons) {
    // now create an eventlistener for all the buttons we 
    item.addEventListener('click', (e) => {
        var buttontext = e.target.innertext
        console.log(buttontext)
    })
}