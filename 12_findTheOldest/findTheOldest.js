const findTheOldest = function(people) {
    return people.reduce((currOldest, person) => {
        const currYear = (new Date()).getUTCFullYear();
        let currOldestDeath = currOldest.yearOfDeath ? currOldest.yearOfDeath : currYear; 
        let personDeath = person.yearOfDeath ? person.yearOfDeath : currYear; 
        return personDeath - person.yearOfBirth 
        > currOldestDeath - currOldest.yearOfBirth ? person : currOldest;

    }, {name: 'unborn', yearOfBirth: 1999, yearOfDeath: 1999})    
};
// Do not edit below this line
module.exports = findTheOldest;
