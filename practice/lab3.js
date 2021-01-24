console.log("text growing and text shrinking")
var p = document.getElementById("demo")
console.log(p)
var start = 5;
var end = 50;
var var1 = setInterval(increasing, 1000)

function increasing() {
    p.innerHTML = "Text growing";
    p.setAttribute('style', 'font-size:' + start + 'px;color:red;');
    start = start + 5
    if (start >= 50) {
        clearInterval(var1);
        var2 = setInterval(decreasing, 1000)
    }

}

function decreasing() {
    p.innerHTML = "text shrinking ";
    end = end - 5
    p.setAttribute('style', 'font-size:' + end + 'px;color:blue;')
    if (end <= 5) {
        clearInterval(var2)
        end = 50
        start = 5
        var1 = setInterval(increasing, 1000)
    }
}