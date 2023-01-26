/*
Each function will be passed an array of objects that looks like:
    [
        { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
        { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
        { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]
See instructions above each function to find out what it should return.
*/

// countFromEurope should return the number of developers who are from Europe.
// For the list above it would return 1.
function countFromEurope(developers) {
    let count = 0;
    developers.forEach( user => {
        if(user.continent === "Europe") {
            count++;
        }
    })
    return count;
}
// console.log(countFromEurope(developers))
// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Lukas, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']
function getGreetings(developers) {
   return developers.map(user => `Hi ${user.firstName}, what do you like the most about ${user.language}?`);
}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
function isJSComing(developers) {
  return developers.filter( user => user.language === 'Javascript').length>0;
}

// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Lukas, Croatia'
function getFirstPythonDeveloper(developers) {
    const pythonDev = developers.filter(user => user.language === 'Python');
    if(pythonDev.length > 0) {
        return `${pythonDev[0].firstName}, ${pythonDev[0].country}`;
    } else {
        return 'none';
    }
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.
function getAverageAge(developers) {
    let averageAge = -1;

    if (developers.length > 0) {
        let ageSum = 0;
        for (let i = 0; i < developers.length; i++) {
            ageSum += developers[i].age;
        }
        averageAge = Math.floor(ageSum / developers.length);
    }

    return averageAge;
}

// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
function getLanguageCounts (developers) {
    const languageCounts = {};

    developers.forEach(developer => {
      const language = developer.language;
      if (language in languageCounts) {
        languageCounts[language] += 1;
      } else {
        languageCounts[language] = 1;
      }
    });
  
    return languageCounts;
}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Lukas']
function getOldest (developers) {
    let oldestAge = 0;
    let oldestDev = [];
    developers.forEach(dev => {
        if (dev.age > oldestAge) {
            oldestAge = dev.age;
            oldestDev = [dev.firstName]
        } else if (dev.age === oldestAge) {
            oldestDev.push(dev.firstName);
        }
    });
    return oldestDev;
}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
function isGlobalGroup (developers) {
    const continents = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
    const continentsCheck = developers.filter(dev => continents.includes(dev.continent));
    if (continentsCheck === continents){
        return true;
    } else{
        return false;
    }
}
// console.log(isGlobalGroup(developers));

// askForMissingDetails should return a list of questions that need answering to fill in missing details from the developers (fields whose values are null)
// For example, if you receive:
// [
//      { firstName: 'Sofia', lastName: 'I.', country: null, continent: 'Americas', age: 34, language: 'Javascript' },
//      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
// ];
// You would return
// [
//      'Hi Sofia. What is your country?',
//      'Hi Lukas. What is your language?'
// ]
// First name will always be present on the developers. There will be at most one field missing.
// Hint: Look up Object.keys, Object.values and Object.entries
function askForMissingDetails (developers) {
    var questions = [];
    for (let i = 0; i < developers.length; i++) {
        const person = developers[i];
        Object.keys(person).forEach(key => {
            if (person[key] === null) {
                questions.push(`Hi ${person.firstName}. What is your ${key}?`);
            }
        });
    }
    return questions;
}



module.exports = {
    countFromEurope,
    getGreetings,
    isJSComing,
    getFirstPythonDeveloper,
    getAverageAge,
    getLanguageCounts,
    getOldest,
    isGlobalGroup,
    askForMissingDetails,
}