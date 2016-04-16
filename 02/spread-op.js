function foo(x, y, z) {
    console.log(x, y, z);
}
var args = [0, 1, 2];
foo.apply(null, args);
foo.apply(void 0, [55, 55, 55]);
var _a = [1, 2, 3, 4], x = _a[0], y = _a[1], remaining = _a.slice(2);
console.log(x, y, remaining);
var l = [1, 2];
l = l.concat([3, 4]);
console.log(l);
