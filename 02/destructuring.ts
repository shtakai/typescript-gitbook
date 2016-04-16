var rect = {
  x: 0,
  y: 10,
  width: 5,
  height: 20
};

var {x, y, width, height} = rect;
console.log(x,y,width,height);

console.log();

const obj = {
  "some property": "some value"
};

const {"some property": someProperty} = obj;
console.log(someProperty === "some value");
console.log();

var x = 1, y = 2;
[x, y] = [y, x];
console.log(x,y);
console.log();

var [x, , ...remaining] = [1,2,3,4];
console.log(x, remaining);
console.log();
