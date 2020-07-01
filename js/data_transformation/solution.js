const data = [
  { 0: 1, 1: 2, 2: 10, 3: 20, 4: 30, inEdit: undefined, item: "splitTime" },
  { 0: 11, 1: 12, 2: 20, 3: 30, 4: 30, inEdit: undefined, item: "splitMode" },
  { 0: 6, 1: 7, 2: 16, 3: 17, 4: 18, inEdit: undefined, item: "phaseReduction" },
  { 0: 4, 1: 5, 2: 14, 3: 15, 4: 16, inEdit: undefined, item: "phaseExtension" }
];

// tranlate above Data to NewData format
const newData = [
  { splitTime: 1, splitMode: 11, phaseReduction: 6, phaseExtension: 4 }, // 00 10 20 30
  { splitTime: 2, splitMode: 12, phaseReduction: 7, phaseExtension: 5 }, // 01 11 21 31
  { splitTime: 10, splitMode: 20, phaseReduction: 16, phaseExtension: 14 }, // 02 12 22 32
  { splitTime: 20, splitMode: 30, phaseReduction: 17, phaseExtension: 15 }, // 03 13 23 33
  { splitTime: 30, splitMode: 30, phaseReduction: 18, phaseExtension: 16 } // 04 14 24 34
];

// check for number
const isNumber = (val) => {
  const regx = /^[0-9]{1,}$/;

  return regx.test(val);
};

// Method 1 (array map):
const transform_map = () => {
  const result = [];

  data.map((item) => {
    Object.keys(item).map((k) => {
      if (isNumber(k)) {
        const index = k;
        const { item: key } = item;
        const value = item[index];

        if (!result[index]) {
          result[index] = {};
        }
        result[index][key] = value;
      }
    });
  });
  return result;
};

// Method 2 (for loop):
const transform_forLoop = () => {
  const result = [];

  for(let i=0; i<data.length; i++){
    const keys = Object.keys(data[i]);

    for(let j=0; j<keys.length; j++){
      if (isNumber(keys[j])) {
        const index = j;
        const { item: key } = data[i];
        const value = data[i][index];

        if (!result[index]) {
          result[index] = {};
        }
        result[index][key] = value;
      }
    }
  }
  return result;
};

const r = transform_map();
// const r = transform_forLoop();
console.log(r);
