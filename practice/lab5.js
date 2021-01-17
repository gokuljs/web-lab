var par = document.getElementById("demo")
console.log(par)
var var1 = setInterval(increasing, 1000)
var small = 5;
var max = 50;

function increasing() {
    par.innerHTML = "TEXT GROWING ";
    par.setAttribute('style', 'color:red;font-size:' + small + 'px;');
    small = small + 5

    if (small >= max) {
        clearInterval(var1)
        var2 = setInterval(decreasing, 1000)
    }


}

function decreasing() {
    par.innerHTML = "text SHRINKING";
    max = max - 5;

    par.setAttribute('style', 'color:blue;font-size:' + max + 'px;')
    console.log(max);
    if (max == 5) {
        clearInterval(var2);

    }


}