let firstFavNumb = 6;
let secondFavNumb = 9;

//Greater than
let greaterThan = firstFavNumb > secondFavNumb;
console.log(greaterThan);

//Less than
let lessThan = firstFavNumb < secondFavNumb;
console.log(lessThan);

//Greater than or equal to
let greaterThanOrEqualTo = firstFavNumb >= secondFavNumb;
console.log(greaterThanOrEqualTo);

//Less than or equal to
let lessThanOrEqualTo = firstFavNumb <= secondFavNumb;
console.log(lessThanOrEqualTo);

//Strictly equality
let strictlyEquality = firstFavNumb === secondFavNumb;
console.log(strictlyEquality);

//Loose equality
let looseEquality = firstFavNumb == secondFavNumb;
console.log(looseEquality);

//Strict inequality
let strictInequality = firstFavNumb !== secondFavNumb;
console.log(strictInequality);

//Loose inequality
let looseInequality = firstFavNumb != secondFavNumb;
console.log(looseEquality);

//AND
let and = firstFavNumb > secondFavNumb && secondFavNumb < firstFavNumb;
console.log(and);

//OR
let or = firstFavNumb === secondFavNumb || secondFavNumb === firstFavNumb;
console.log(or);

//NOT
let isPassed = true;
let isFailed = false;

console.log(!isPassed);
console.log(!isFailed);