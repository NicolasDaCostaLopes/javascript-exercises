const findTheOldest = function (array) {
    return array.reduce((accumulator, person) => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        if (Object.keys(accumulator).length === 0) {
            return person
        } else {
            if (person.yearOfDeath - person.yearOfBirth > accumulator.yearOfDeath - accumulator.yearOfBirth) {
                return person
            }
            return accumulator
        }

    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
