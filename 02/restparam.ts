function iTakeItAll(first, second, ...allOthers){
  console.log(allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'baz', 'qux');

class TakeItAll {
  takeit = (first,second, ...allOthers) => {
    console.log(allOthers);
  }
  takeit2(first, second, ...allOthers){
    console.log(allOthers);
  }
}

var tka = new TakeItAll();
tka.takeit2('foo','bar');
tka.takeit2('foo','bar','baz','sss');
