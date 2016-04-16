class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

var foo = new FooBase();
foo.x;
// foo.y;
// foo.z;

class FooChild extends FooBase {
  constructor() {
    super();
    this.x;
    // this.y;
    this.z;
  }
}


class Foo {
  x: number;
  constructor(x: number){
    this.x = x;
  }
}
