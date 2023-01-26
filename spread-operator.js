// Cursor Park (anyone not typing put your cursor here)

// Make a function that says "Hello Academy folks: Alice Bob Charles Danielle"
// function helloAcademy (person1, person2, person3, person4) {
//     console.log(`Hello Academy folks: ${person1} ${person2} ${person3} ${person4}`)
// }
let helloAcademy = (person1, person2, person3, person4) => console.log(`Hello Academy folks: ${person1} ${person2} ${person3} ${person4}`)

// An array of academy folks
const academyFolks = ['Alice', 'Bob', 'Charles', 'Danielle'];

// Call the function that says hello with an exploded array (spread it)
//TODO
console.log(helloAcademy(...['Tom','Carabine','John', 'Dene']));
// Add more academy folks into a new array in one line using the spread operator
//TODO
const moreAcademy = [...academyFolks, 'Johny'];
console.log(moreAcademy);
// Say hello to all the academy folks using the spread operator
//TODO
console.log("Hello" + " " + moreAcademy);
//EOF
