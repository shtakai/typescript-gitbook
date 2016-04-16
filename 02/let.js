var foo = 123;
if (true) {
    var foo_1 = 234;
}
console.log(foo);
console.log();
var index = 0;
var array = [1, 2, 3];
for (var index_1 = 0; index_1 < array.length; index_1++) {
    console.log(array[index_1]);
}
console.log(index);
console.log();
var funcs = [];
var _loop_1 = function(i) {
    funcs.push(function () {
        console.log(i);
    });
};
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
