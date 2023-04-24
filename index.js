// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// const arr = plants.pop()

// console.log(arr,plants);
// push
// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('cows');
// console.log(count,animals);
// Expected output: "tomato"

// shift
// const array1 = [1, 2, 3];

// const firstElement = array1.shift();

// console.log(array1);
// // Expected output: Array [2, 3]

// console.log(firstElement);
// Expected output: 1

// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // Expected output: 5

// console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

// toString

// let arr =[1,2,'1r','5']
// console.log(arr,arr.toString());

// Expected output: "1,2,a,1a"


//  splice 

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(1, 2, 'May');
// // Replaces 1 element at index 4
// console.log(months);
// Expected output: Arr

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// // concat
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// console.log(array3);

//   join

// const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(''));
// // Expected output: "FireAirWater"

// console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"


// sort
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a,b)=>a-b);
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

// // indexOf
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison',2));
// // Expected output: 1

// // Start from index 2
// console.log(beasts.indexOf('bison', 1));
// // Expected output: 4

// console.log(beasts.indexOf('girffe'));
// // // Expected output: -1
// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // Expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // Expected output: true

// console.log(pets.includes('at'));
// Expected output: false
//  Map()

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1); 
// Filter()
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//  find

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
//  reduce

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);

//  for Each
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));