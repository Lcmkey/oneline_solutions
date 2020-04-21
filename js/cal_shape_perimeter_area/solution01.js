const Circle = ({ no = 0, radius = 0 }) => ({
  no,
  name: "Circle",
  radius,
  perimeter: () => 2 * Math.PI * radius,
  area: () => Math.PI * Math.pow(radius, 2)
});

const Rectangle = ({ no = 0, width = 0, height = 0 }) => ({
  no,
  name: "Rectangle",
  width,
  height,
  perimeter: () => 2 * (width + height),
  area: () => width * height
});

const Square = ({ no = 0, length = 0 }) => ({
  no,
  name: "Square",
  length,
  perimeter: () => 4 * length,
  area: () => Math.pow(length, 2)
});

const dataList = [
  Circle({ no: 1, radius: 10 }),
  Rectangle({ no: 2, width: 12, height: 3 }),
  Square({ no: 3, length: 5 }),
  Square({ no: 4, length: 7 }),
  Circle({ no: 5, radius: 6 }),
  Rectangle({ no: 6, width: 4, height: 8 }),
  Rectangle({ no: 7, width: 3, height: 10 })
];

let result = [];
dataList.map(item => {
  const { no, name, perimeter, area } = item;
  // console.log(`No: ${item.no}, Shape: ${item.name}, Perimeter: ${item.perimeter()}, Area: ${item.area()}\n`
  result = [
    ...result,
    {
      No: no,
      Shaple: name,
      Perimeter: perimeter(),
      Area: area()
    }
  ];
});

console.table(result);
