function remove_duplicates() {
  var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];

  //console.log(Array.from(new Set(fruits)));
  console.log([...new Set(fruits)]);
}
//remove_duplicates();

function replace() {
  var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
  fruits.splice(0, 2, "potato", "tomato");
  console.log(fruits);
}
//replace();

function square_array() {
  var numbers = [1, 4, 9, 16];
  //console.log(`Sum: ${numbers.map(n => n * n)}`);
  console.log(`Sum: ${Array.from(numbers, n => n * n)}`);
}
//square_array();

function filter_array() {
  var friends = [{
      name: 'John',
      age: 22
    },
    {
      name: 'Peter',
      age: 23
    },
    {
      name: 'Mark',
      age: 24
    }
  ];

  //console.log(friends.map(f => f.name));
  console.log(Array.from(friends, ({
    name
  }) => name));
}
//filter_array();

function empty_array() {
  var fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];
  fruits.length = 0;
  console.log(fruits);
}
//empty_array();

function array2object() {
  console.log(...['a', 'b', 'c']);
}
//array2object();

function merge_arrays() {
  var fruits = ['apple', 'banana', 'orange'];
  var meat = ['poultry', 'beef', 'fish'];
  var vegetables = ['potato', 'tomato', 'cucumber'];
  console.log([...fruits, ...meat, ...vegetables]);
}
//merge_arrays()

function diff_arrays() {
  var n1 = [2, 5, 8, 2, 4];
  var n2 = [5, 3, 2, 4, 0];

  console.log([...new Set(n1)].filter(n => !n2.includes(n)))
  console.log([...new Set(n2)].filter(n => !n1.includes(n)))
}
//diff_arrays()

function remove_falsy() {
  var a = [0, "b", "", NaN, "c", true, "a", false, "c", undefined]
  console.log(a.filter(Boolean));
}
//remove_falsy();

function sum_array() {
  var numbers = [3, 5, 22, 8, 2];
  console.log(numbers.reduce((x, y) => x + y));
}
sum_array();