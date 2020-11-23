console.log("Getting started at javascreipt part")
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText
        console.log(buttonText)

    })
}