var Fib = (function () {
    function Fib(maxValue) {
        this.maxValue = maxValue;
        this.fn1 = 0;
        this.fn2 = 1;
    }
    Fib.prototype.next = function () {
        var current = this.fn1;
        this.fn1 = this.fn2;
        this.fn2 = current + this.fn1;
        if (this.maxValue && current <= this.maxValue) {
            return {
                done: false,
                value: current
            };
        }
        return {
            done: true
        };
    };
    Fib.prototype[Symbol.iterator] = function () {
        return this;
    };
    return Fib;
}());
var fib = new Fib();
fib.next(); //{ done: false, value: 0 }
fib.next(); //{ done: false, value: 1 }
fib.next(); //{ done: false, value: 1 }
fib.next(); //{ done: false, value: 2 }
fib.next(); //{ done: false, value: 3 }
fib.next(); //{ done: false, value: 5 }
console.log(fib.next());
var fibMax50 = new Fib(50);
console.log(Array.from(fibMax50)); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
var fibMax21 = new Fib(21);
for (var _i = 0, fibMax21_1 = fibMax21; _i < fibMax21_1.length; _i++) {
    var num = fibMax21_1[_i];
    console.log(num); //Prints fibonacci sequence 0 to 21
}
