# ES6 Featues

- let and const
- ``Template literal
- ...spread ope
- ...rest ope
- destructing
- class
- arrow
- promise
- numeric separators
- nullish

# Template literal

- Interpolation(substitution)
- supports multi-line

# Array Destructing

- example => const [t1,t2] = [100,200]
- Default values - const [t1,t2,t3 = 80] = [100,200]; // t3 will take value only if it is undefined
- Holes syntax [, t1,t2, t3 = 80] = [100,200,null]

# Object Detsruction

- Default
- example

# Numeric separator

- Ternary Operators have 3 operands -> `5 >4 ? "true" : "false"`
- Binary Operators have 2 operand -> `5 + 2 = 7`
- Unary Operator -> `increment(++,--)`

# Truthy and Falsy

## Truthy

- if value if true it is considered as true

var x = "cool";

if(x){
console.log("hello");
} else {
console.log("hey");
}

## Falsy

false
0
'' (empty string)
null
undefined
NaN

[Falsy table link](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

# Rest Operator

- will collect remaining numbers in the array
- if it is in the left called rest and right is spread

`example -> const [t1,t2,...t3] = [10,20,30,40,50,60] o/p-> t=10,t2=20,t3=[30,40,50,60]`
