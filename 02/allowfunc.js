var Person = (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    Person.prototype.growOld2 = function () {
        this.age++;
    };
    return Person;
}());
var person = new Person(1);
setTimeout(function () {
    person.growOld2();
}, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
var person2 = new Person(1);
setTimeout(person2.growOld(), 1000);
setTimeout(function () { console.log(person2.age); }, 2000);
