class Base {
  log(){
    console.log('hello world');
  }
  log2 = () => {console.log('hello2');}
}

class Child extends Base{
  log(){
    super.log();
  }
  logWorld(){this.log2();}
}

module quz {
  class Base {
    log = () => {console.log('hell');}
  }
  class Child extends Base {
    logWorld(){this.log();}
  }
}


var b = new Base();
b.log();
var c = new Child();
c.log();

b.log2();
c.logWorld();
