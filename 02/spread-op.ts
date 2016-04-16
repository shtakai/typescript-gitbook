function foo(x,y,z){
  console.log(x,y,z);
}

var args = [0,1,2];
foo.apply(null, args);
foo(...[55,55,55]);

var [x,y,...remaining] = [1,2,3,4];
console.log(x,y,remaining);

var l = [1,2];
l = [...l,3,4];
console.log(l);
