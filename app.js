
let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}

let oneDollarIs = {
    "JPY": 115.79,
    "EUR": 0.88,
    "GBP": 0.74,
}

let oneYenIs = {
    "USD": 0.0086,
    "EUR": 0.0076,
    "GBP": 0.0064,
}

const fromDollarToYen = (int) => int * oneDollarIs.JPY;

const fromEuroToDollar = (int) => int * oneEuroIs.USD;

const fromYenToPound = (int) => int * oneYenIs.GBP;

console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(10));
console.log(fromYenToPound(10000));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
