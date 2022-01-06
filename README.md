# Unit testing with Jest

## Received README

```
Important: 💻  This exercise is interactive.
Please follow the instructions.
```

Most developers today are required not only to write code, but they also need to write code to test their own code 😱, yes.. really.

Today we are going to be using the [jest framework](https://jestjs.io/) to create our first tests.

## 🌱  How to start this project

This project comes with the necessary files to start working, but you have two options to start:

a) Use gitpod: open this link in your browser to clone it with gitpod: https://gitpod.io#https://github.com/breatheco-de/exercise-unit-test-with-jest.git

b) You can clone this repository on your local computer:
```sh
$ git clone https://github.com/breatheco-de/exercise-unit-test-with-jest.git

💡 Important: Remember to create a new repository, update the remote (`git remote set-url origin <your new url>`), and upload the code to your new repository using `add`, `commit` and `push`.
```
Then follow this instructions:

1. Get into the exercise folder: `$ cd exercise-unit-test-with-jest`
2. Download learnpack globally (if you don't have it already): `$ npm i learnpack -g`
3. Start the exercise: `$ learnpack start`

## What is this exercise about?

We are going to be using the Jest library to build a program capable of converting numeric values from one currency to another:

| Function name     | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| fromDollarToYen   | Receives a dollar amount and returns equivalent amount in Japan Yen  |
| fromEuroToDollar  | Receives a Euro amount and returns equivalent amount in US Dollar     |
| fromYenToPound    | Reveives a Yen amount and equivalent amount in England Pound          |

# My work's README

I just did the exercise creating three objects with the data needed registered.

Ex.:
```JavaScript
let oneDollarIs = {
    "JPY": 115.79,
    "EUR": 0.88,
    "GBP": 0.74,
}
```
With very small `arrow functions` I made the three functions asked for:

Ex.:

```JavaScript
const fromDollarToYen = (int) => int * oneDollarIs.JPY;
const fromEuroToDollar = (int) => int * oneEuroIs.USD;
const fromYenToPound = (int) => int * oneYenIs.GBP;
```

And finally the **tests**:

```JavaScript
test('adds 1 $ to equal 115.79 Yens', () => 
    expect(fromDollarToYen(1)).toBe(115.79));
test('adds 10 € to equal 12 $', () => 
    expect(fromEuroToDollar(10)).toBe(12));
test('adds 10000 yen to equal 64 GPB', () => 
    expect(fromYenToPound(10000)).toBe(64));
```

> As simple as that, I have come to that~

_Thank you for reading,_

_Aslan_
