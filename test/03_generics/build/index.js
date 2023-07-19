var superPrint = function (a) { return a[0]; };
var a = superPrint([1, 2, 3]);
var b = superPrint(['a', 'b', 'c']);
var c = superPrint([true, false, true]);
var d = superPrint([1, 2, true, 'why', false, 10]);
console.log(a, b, c, d);
