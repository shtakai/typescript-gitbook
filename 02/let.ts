var foo = 123;
if(true){
  let foo = 234;
}


console.log(foo);

console.log();

var index = 0;
var array = [1,2,3];
for(let index = 0; index <array.length;index++){
  console.log(array[index]);
}
console.log(index);

console.log();
var funcs = [];
for(let i = 0; i < 3; i++){
  funcs.push(function () {
    console.log(i);
  });
}

for(let j = 0; j < 3; j++){
  funcs[j]();
}
