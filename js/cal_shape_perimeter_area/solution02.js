class Shape {
  constructor({ no, name }) {
    this.no = no;
    this.name = name;
  }

  perimeter = () => 0;
  area = () => 0;
}

class Circle extends Shape {
  constructor({ no = 0, radius = 0 }) {
    super({ no, name: "Circle" });
    this.radius = radius;
  }

  perimeter = () => 2 * Math.PI * this.radius;
  area = () => Math.PI * Math.pow(this.radius, 2);
}

class Rectangle extends Shape {
  constructor({ no = 0, width = 0, height = 0 }) {
    super({ no, name: "Rectangle" });
    this.width = width;
    this.height = height;
  }

  perimeter = () => 2 * (this.width + this.height);
  area = () => this.width * this.height;
}

class Square extends Shape {
  constructor({ no = 0, length = 0 }) {
    super({ no, name: "Square" });
    this.length = length;
  }

  perimeter = () => 4 * this.length;
  area = () => Math.pow(this.length, 2);
}

const dataList = [
  new Circle({ no: 1, radius: 10 }),
  new Rectangle({ no: 2, width: 12, height: 3 }),
  new Square({ no: 3, length: 5 }),
  new Square({ no: 4, length: 7 }),
  new Circle({ no: 5, radius: 6 }),
  new Rectangle({ no: 6, width: 4, height: 8 }),
  new Rectangle({ no: 7, width: 3, height: 10 })
];

// console.log(dataList);
let result = [];
dataList.map(item => {
  result = [
    ...result,
    {
      No: item.no,
      Shaple: item.name,
      Perimeter: item.perimeter(),
      Area: item.area()
    }
  ];
});

console.table(result);
