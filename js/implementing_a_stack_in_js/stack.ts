class Stack {
    items: Array<number>;
    count: number;
  
    constructor() {
      this.items = [];
      this.count = 0;
    }
  
    // Add element to top of stack
    push = (element: number): void => {
      this.items[this.count] = element;
      this.count += 1;
  
      console.log(`${element} added to ${this.count}`);
    };
  
    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop = (): undefined | number => {
      if (!this.count) {
        return undefined;
      }
  
      this.count -= 1;
      const deleteItem = this.items.pop(); // orgin arrat method
      // const deleteItem = this.items[this.count];
  
      console.log(`${deleteItem} removed`);
  
      return deleteItem;
    };
  
    // Check top element in stack
    peek = (): number => {
      console.log(`Top element is ${this.items[this.count - 1]}`);
  
      return this.items[this.count - 1];
    };
  
    // Check if stack is empty
    isEmpty = (): boolean => {
      console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
  
      return !this.count;
    };
  
    // Check size of stack
    size = (): number => {
      console.log(`${this.count} elements in stack`);
  
      return this.count;
    };
  
    // Print elements in stack
    print = (): string => {
      let str = "";
  
      for (let i = 0; i < this.count; i++) {
        str += this.items[i] + " ";
      }
  
      return str.trim();
    };
  
    // // Clear stack
    clear = (): void => {
      this.items = [];
      this.count = 0;
  
      console.log("Stack cleared..");
    };
  }
  
  const stack = new Stack();

  stack.isEmpty();
  
  stack.push(100);
  stack.push(200);
  
  stack.peek();
  
  stack.push(300);
  
  console.log(stack.print());
  
  stack.pop();
  stack.pop();
  
  stack.clear();
  
  console.log(stack.print());
  
  stack.size();
  
  stack.isEmpty();
  