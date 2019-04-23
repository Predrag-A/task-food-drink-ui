function setValues(id, quantity, total) {
    var q = document.getElementById(id + "-quantity");
    var t = document.getElementById(id + "-total");
    q.innerHTML = quantity;
    t.innerHTML = "$" + total;
}

function setListeners(id, add, sub) {
    var a = document.getElementById(id + "-add");
    var s = document.getElementById(id + "-sub");
    a.addEventListener("click", add);
    s.addEventListener("click", sub);
}


window.onload = function() {
    var oranges = new Fruit("o", 1, 0.5);
    var lettuce = new Fruit("l", 2, 1);
    var strawberries = new Fruit("s", 1, 4);

    var empty = document.getElementById("empty-list");
    empty.addEventListener("click", oranges.empty);
    empty.addEventListener("click", lettuce.empty);
    empty.addEventListener("click", strawberries.empty);
}