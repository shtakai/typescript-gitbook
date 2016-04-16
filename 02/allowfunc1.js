function Person(age) {
	this.age = age;
	var _this = this;
	this.growOld = function () {
		_this.age++;
	}

}

var person = new Person(1);
console.log(person.age);
setTimeout(person.growOld,1000);
setTimeout(function () {
	console.log(person.age);
},2000);
console.log(person.age);
