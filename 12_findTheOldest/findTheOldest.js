const findTheOldest = function(people) {
    for (let i = 0; i < people.length; i++) {
        if (typeof people[i].yearOfDeath === 'undefined') {
            people[i].age = (new Date().getFullYear()) - people[i].yearOfBirth;            
        } else {
            people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
        }
    }
    people.sort((a, b) => (a.age < b.age) ? 1 : -1)
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
