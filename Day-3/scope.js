console.log("Hello from scope");

// Normal function
function normal(n)
    {
    return n*2;
    }


console.log(normal(10));

// Arrow function
const double = (n) => {
    return n *2;
}
// const double = (n) => n *2; // single line
console.log(double(5));

// DRY Code
function add(a,b){
    if (a>=10){
        return a*b;
    }
    return a+b;
}

console.log("Sum of 1 : ",add(2,3));
console.log("Sum of 2 : "+add(4,6));
console.log("Sum of 3 : "+add(10,10)); 

// 5 Pillars of Code Quality
// 1. Readable - 75%
// 2. Maintainability - Code Debt
// 3. Extensibility
// 4. Testability
// 5. Performance


// Spread Operator
var q1 = [100,200];
var q2 = [10,...q1,50];

q1.push(300);
console.log(q1);
console.log(q2);


var t1 = [400,500];
var t2 = [90,80];

var t3 = [...t2 , ...t1];
console.log(t3);


// Loops

const marks = [80,90,100];

// for (let index = 0; index < marks.length; index++) {
//     const element = "Value at "+index + ": "+ marks[index];
//     console.log(element);
// }


//in => index

// for (let id in marks) {    
//     console.log("Value of",id,"Index have marks:",marks[id]);
// }

for (let mark of marks) {
    console.log("Mark:",mark);
}


const cart =
[
    {name:"Apple",price:0.5,quantity:4},
    {name:"Banana",price:0.25,quantity:6},
];
const newItems =
[
    {name:"Cherry",price:0.75,quantity:5},
    {name:"Date",price:1,quantity:3},
];

const allItems = [...cart,...newItems];

total = 0;
for (const item of allItems) {
    price = item.price * item.quantity;
    total += price;
}
console.log("Total Cart Value is : "+ total);

// var sum =0;
// for (const item of cart) {
//     price1 = item.price * item.quantity;
//     sum += price1;
// }
// for (const item of newItems) {
//     price2 = item.price * item.quantity;
//     sum+=price2;
// }
// console.log(sum);


// Ex 2: Rating 4.7 and above | Recommendations List
const books = [
    { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
    { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
    { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
    { title: "Sapiens", rating: 4.9, genre: "History" },
    { title: "Clean Code", rating: 4.7, genre: "Technology" },
  ];
  c = [];
  for (const item of books) {
      if(item.rating>=4.7){
          // console.log(item.title,item.rating,item.genre);
       c.push(item.title);
    //    c.push(item.rating);
    }
  }

  console.log(c);



// Ex 3: If employee's grades 80 or above promote them
const employes = [
    { id: 1, name: "Alice", grade: 78 },
    { id: 2, name: "Bob", grade: 85 },
    { id: 3, name: "Charlie", grade: 92 },
    { id: 4, name: "David", grade: 88 },
    { id: 5, name: "Eva", grade: 76 },
  ];
  
  // This should output:
  // [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]

  var a = [];
  for (const emp of employes) {
    if(emp.grade >= 80){
        b = {}; 
        b.id = emp.id;
        b.status = "Promoted";
        a.push(b);
    }
  }

  console.log(a);


  // Ex4: Top 2 movie titles

const movies = [
    { title: "Inception", ratings: [5, 4, 5, 4, 5] },
    { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
    { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
    { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
    { title: "Memento", ratings: [4, 5, 4, 5, 4] },
  ];
  
  // Expected Output:  The Dark Knight

  function MostRatedMovie(){
    var bestMovie = null;
    var SumOfRating = 0;
    for (let item of movies) {
        AllMoviesRatings = item.ratings;

    var sum = 0;
    for (let item of AllMoviesRatings) {
        sum += item;
    }
    console.log(sum);

    if(sum>SumOfRating){
        SumOfRating = sum;
        bestMovie = item.title;
    }
  }
  return bestMovie;
  }
   
console.log("Most Rated among the all are:",MostRatedMovie(movies));