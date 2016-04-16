'use strict';

class Component{
  constructor(public name: string){}
}

class Frame implements Iterator<Component> {
  private pointer = 0;
  constructor(public name: string, public components: Component[]){}

  [Symbol.iterator](){
    let pointer = 0;
    let components = this.components;
    return{
      next(): IteratorResult<Component> {
        if (pointer < components.length) {
          return {
            done: false,
            value: components[pointer++]
          }
        } else {
          return {
            done: true
          }
        }
      }
    }
  }
  [Symbol.iterator](): IterableIterator<Component> {
  }
}

let frame = new Frame("Door", [new Component("top"), new Component("bottom"), new Component("left"), new Component("right")]);
for(let cmp of frame){
  console.log(cmp);
}
