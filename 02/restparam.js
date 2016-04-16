function iTakeItAll(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'baz', 'qux');
var TakeItAll = (function () {
    function TakeItAll() {
        this.takeit = function (first, second) {
            var allOthers = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                allOthers[_i - 2] = arguments[_i];
            }
            console.log(allOthers);
        };
    }
    TakeItAll.prototype.takeit2 = function (first, second) {
        var allOthers = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            allOthers[_i - 2] = arguments[_i];
        }
        console.log(allOthers);
    };
    return TakeItAll;
}());
var tka = new TakeItAll();
tka.takeit2('foo', 'bar');
tka.takeit2('foo', 'bar', 'baz', 'sss');
