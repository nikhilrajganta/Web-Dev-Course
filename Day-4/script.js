// ctrl + shift + p => to open command pallete

console.log("How is your day ?");

let salaries = {
  nikhil: 20000,
  guna: 20000,
  pavan: 20000,
};

console.log(Object.keys(salaries));
console.log(Object.values(salaries));

const movieUrl = (domain, genre, year) => {
  // console.log( "http://" + domain + "?genere=" + genre + "&year=" + year );
  return `http://${domain}?genere=${genre}&year=${year}`;
};

console.log(movieUrl("imdb.com", "thriller", 2020));

const movieUrl1 = (domain, genre, year) =>
  `http://${domain}?genere=${genre}&year=${year}`;

console.log(movieUrl("imdb.com", "thriller", 2020));

const cart = [
  { name: "Apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];
const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];

const allItems = [...cart, ...newItems];

total = 0;
for (let { price, quantity } of allItems) {
  total += price * quantity;
}

console.log(`Total Cart Value is : ${total}`);

// Task 6
let sentence = "Hello world from JavaScript";
let transformed = transformSentence(sentence);

function transformSentence(line) {
  // upperCaseText = line.toUpperCase();
  return line.toUpperCase().split(" ").reverse().join(" ");
  // return arrayText.join(" ");
}

// const transformSentence = (line) =>
//     line.toUpperCase().split(" ").reverse().join(" ");

console.log(transformed);
// Output: "JAVASCRIPT FROM WORLD HELLO"

// Task 7: Improving code quality

function processNames(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let upperCaseName = names[i].toUpperCase();
    let nameParts = upperCaseName.split(" ");
    let joinedName = nameParts.join("_");
    result.push(joinedName);
  }
  return result;
}

function processNames2(names) {
  let result = [];
  for (let i = 0; i < names.length; i++) {
    let upperCaseName = names[i].toUpperCase().split(" ").join("_");
    result.push(upperCaseName);
  }
  return result;
}

const namesArray = ["john doe", "jane smith", "alice jones"];
console.log(processNames2(namesArray));
