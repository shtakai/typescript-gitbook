var rect = {
    x: 0,
    y: 10,
    width: 5,
    height: 20
};
var x = rect.x, y = rect.y, width = rect.width, height = rect.height;
console.log(x, y, width, height);
console.log();
var obj = {
    "some property": "some value"
};
var someProperty = obj["some property"];
console.log(someProperty === "some value");
console.log();
var x = 1, y = 2;
_a = [y, x], x = _a[0], y = _a[1];
console.log(x, y);
console.log();
var _b = [1, 2, 3, 4], x = _b[0], remaining = _b.slice(2);
console.log(x, remaining);
console.log();
var _a;
