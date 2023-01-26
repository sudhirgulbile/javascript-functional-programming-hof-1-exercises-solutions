// Cursor Park (anyone not typing put your cursor here)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Reduce the array to only the total age in months of all the doggie Academites

let reducedArray = someAcademitesWithAges.map(item => item.age) // The map() is used to iterate over an array and manipulate or change data items
console.log(reducedArray)

// Sort the array by the names (alphabetically)

let sortedList = someAcademitesWithAges.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedList);

// Make a separate sorting function then use it
const sortByName = "TODO"
// TODO

// Sort the array by the reverse ages (so, oldest first)
// Make a separate sorting function then use it

let oldFirst = someAcademitesWithAges.sort((a, b) => a.age - b.age);
let sortByAges = oldFirst.reverse();
console.log(sortByAges);

// EOF
