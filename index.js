console.clear();
// Functions
function myFunction() {
  console.log(`Moin`);
  const coffee = "Kaffee";
  return coffee;
}

const myArrwoFunction = (para) => console.log(`Hi max, ${para}`);

myFunction();
myArrwoFunction("alter Schwede");

console.log(myFunction());

// Loops
const importantNumbers = [1, 2, 3, 4, 5];
const knownNames = ["calle", "henni", "maks", "frank", "mona", "julia"];

objectarray = [
  { name: "calle", hair_colors: ["purple", "brown", "blue"] },
  {
    name: "frank",
    hair_colors: ["brwon"],
  },
];

console.log(objectarray[1]);
objectarray.map((object) => console.log(object.name));

// while loop

let i = 0;
while (i < knownNames.length) {
  console.log(knownNames[i]);
  i++;
}

for (let i = 0; i < knownNames.length; i++) {
  console.log(knownNames[i] + "is a shark");
}

// Callbacks

function higherOrderFunction(currywurst) {
  currywurst();
}

function passThisFunction() {
  console.log("Moin Moin");
}

higherOrderFunction(passThisFunction);

function anotherHigherOrder(food, callback) {
  callback(food);
}

function logSomething(para) {
  console.log(para);
}

anotherHigherOrder("Juhu", logSomething);

function lastHigherFunction(drink, callback) {
  callback(drink);
}

lastHigherFunction("Holy Shit", (variable) => console.log(variable));

// Array Methods
const mappedArray = importantNumbers.map((item) => console.log(item * 2));

const filteredArray = knownNames.filter((name) => name.length === 5);
console.log(filteredArray);
console.log([]);

// reduce --- mal nachlesen !!

// Spread & Rest

//spread
const myNewArray = [...knownNames, "coffee", ...importantNumbers, "clouds"];
console.log(myNewArray);
const knownNamesCopy = [...knownNames];
console.log(knownNamesCopy);

//Rest
const sumThisArray = [1, 2, 3, 4, 5, 6];
const sumThisArray2 = ["a", "b"];

// function takesSomeArguments(...takesSomeArguments) {
//   console.log(takesSomeArguments);
//   //console.log(arguments);
//   return [...takesSomeArguments].reduce(
//     (total, nextValue) => total + nextValue
//   );
// }
//console.log (takesSomeArguments(1,1,2,3,5,8,13));
//console.log(takesSomeArguments(...sumThisArray2));
//console.log(takesSomeArguments(...knownNames));
// Fetch

const url = "https://rickandmortyapi.com/api/character/";

async function getData(url) {
  try {
    const response = await fetch(`${url}`);
    if (!response.ok) {
      console.log("Something went wrong");
    } else {
      const data = await response.json();
      //console.log(data.results);
      return data;
    }
  } catch (error) {
    console.log(error.message);
  }
}
console.log(getData(url));

//console.log(getData(url));

// const fetchResult = getData(url);
// console.log(fetchResult);
