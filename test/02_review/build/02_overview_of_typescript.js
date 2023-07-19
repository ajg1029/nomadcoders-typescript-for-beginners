// basic types
var height = 183;
var look = "handsome";
var isMarried = false;
// optional types
var playerOne = {
    name: "Deon"
};
var hanbin = {
    name: "Hanbin"
};
// return types
function add(a, b) {
    return a + b;
}
var sum = add(1, 2);
function playerMaker(name) {
    return {
        name: name
    };
}
var seph = playerMaker("Seph");
seph.age = 18;
