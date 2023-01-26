// Cursor Park (anyone not typing put your cursor here)

const someAcademites = ['Luca', 'Oscar', 'Wiggins', 'Gatsby']

// Lets use forEach() to iterate the Academites

someAcademites.forEach(Academites => console.log(Academites));

// Lets use map() to shout out a HELLO LUCA to each Academite
let shoutOut = someAcademites.map(academites => 'Hello' + ' ' + academites);
console.log(shoutOut)

// Lets use filter to remove Luca as she's been naughty today

let filtered = someAcademites.filter(Academites => Academites != 'Luca')
console.log(filtered)

// Here are some Academite ages (in months!)

const someAcademitesWithAges = [ // array of objects
    { name: "Luca", age: 8 }, // ages in months!
    { name: "Oscar", age: 9 },
    { name: "Wiggins", age: 44 },
    { name: "Gatsby", age: 56 }
]

// Lets filter out all the young naughty dogs/academites!
// ..remove the ones younger than 12 months
const above12Months = someAcademitesWithAges.filter(item => item.age < 12)
console.log('Academites above 12 months:', above12Months)

// Now lets filter the older academites out and then shout out the NAME of each, all in one go
// ..we need some "method chaining" also called "functional composition"
const filteredAndShouted = someAcademitesWithAges.filter(item => item.age > 12)
console.log(`Shouty Young Dogs: ${filteredAndShouted.map(item => item.name)}`)

/*
Filtering first means that the mapping only deals with items that remain after filtering. 
Mapping first would have turned all of the names to upper case before filtering out the older dogs (so less efficient).
*/

// EOF
