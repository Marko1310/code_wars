// STACK IN JS
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // Adds value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) return undefined;

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Return the size of stack
  size() {
    return this.count;
  }

  // Return the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  }
}

const stack = new Stack();
console.log(stack);

stack.push('something');
stack.push('something else');
stack.pop();
console.log(stack.size());
console.log(stack.peek());
