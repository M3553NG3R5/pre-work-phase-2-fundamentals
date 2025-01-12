//Part 1
// Equals
let equals = 1 == "1";
//console.log(equals);

// Greater than
let greaterThan =  5 > 1;

// Less Than
let lessTHan = 2 < 10;

// Greater than or equals to
 let greaterThanEq = 5 >= 5;

// Less than or equals to
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

//Part 2
let storeA = 3.10;
let storeB = 4.40;

function compareStorePrices(storeA, storeB) {
    let storeAisLower = storeA < storeB
    if (storeAisLower) {
        console.log("Store A is cheaper than store B.");
    } else if (storeB < storeA) {
        console.log("Store B is cheaper than store A.");
    } else {
        console.log("The stores have the same price.");
    }
}
compareStorePrices(storeA, storeB);
compareStorePrices(201, 120938);

function squareNum (number) {
    return number *= number;
}

let squaredNumber = squareNum(123);
console.log(squaredNumber);

//Part 3
let x = 10;

function addNumbers( n, m, x){
    console.log(x)
    return n + m;
}

addNumbers(5, 12, 321);

//Part 4
let ourArray = [1, 2, 3, 4, 5, 1 ,8];
console.log(ourArray[0]);

let arrLength = ourArray.length;
for (let i = 0; i < arrLength; i++) {
    console.log("i is equal to: " + i);
    //console.log(ourArray[i]);
}

let x2 = 2;
while (x2 < 300) {
    console.log(x2);
    x2 *= x2;
}