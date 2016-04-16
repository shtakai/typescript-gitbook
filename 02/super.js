var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base = (function () {
    function Base() {
        this.log2 = function () { console.log('hello2'); };
    }
    Base.prototype.log = function () {
        console.log('hello world');
    };
    return Base;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child() {
        _super.apply(this, arguments);
    }
    Child.prototype.log = function () {
        _super.prototype.log.call(this);
    };
    Child.prototype.logWorld = function () { this.log2(); };
    return Child;
}(Base));
var quz;
(function (quz) {
    var Base = (function () {
        function Base() {
            this.log = function () { console.log('hell'); };
        }
        return Base;
    }());
    var Child = (function (_super) {
        __extends(Child, _super);
        function Child() {
            _super.apply(this, arguments);
        }
        Child.prototype.logWorld = function () { this.log(); };
        return Child;
    }(Base));
})(quz || (quz = {}));
var b = new Base();
b.log();
var c = new Child();
c.log();
b.log2();
c.logWorld();
