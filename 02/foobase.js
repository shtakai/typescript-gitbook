var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FooBase = (function () {
    function FooBase() {
    }
    return FooBase;
}());
var foo = new FooBase();
foo.x;
// foo.y;
// foo.z;
var FooChild = (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        _super.call(this);
        this.x;
        // this.y;
        this.z;
    }
    return FooChild;
}(FooBase));
var Foo = (function () {
    function Foo(x) {
        this.x = x;
    }
    return Foo;
}());
