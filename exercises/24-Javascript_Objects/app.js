var person = {
    name: "John",
    lastName: "Doe",
    age: 35,
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: person2
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]
};

function addAllFamilyLuckyNumbers(anArray) {
    let sumOfAllLuckyNumbers = 0;

    for (let i = 0; i < anArray.length; i++) {
        for (let j = 0; j < anArray[i].luckyNumbers.length; j++) {
            sumOfAllLuckyNumbers += anArray[i].luckyNumbers[j];
        }
    }

    return sumOfAllLuckyNumbers;
}

// Programmatically change John Doe's fourth luckyNumber to 33
person.luckyNumbers[3] = 33;

// Programmatically create Jimmy Doe and add to the family
var jimmy = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};
family.members.push(jimmy);

// Print the sum of all luckyNumbers of the Doe family
console.log(addAllFamilyLuckyNumbers(family.members));