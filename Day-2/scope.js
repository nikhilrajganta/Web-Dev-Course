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