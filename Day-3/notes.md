# Scope

# Difference between undefined and not defined

undefined occurs when variable declared but value not given, but not defined occurs when it is accesses outside the block.

# Implicit and Explicit in JS

Implicit :

var x1 = 10;
var x2 = "k";

      console.log(x1 + x2);

Explicit :

var x1 = 10;
var x2 = "";

      console.log(x1 + parseInt(2));

# Difference between == and ====

Strict equality check `(===) is generally faster` than the loose equality check (==) because it doesn't perform implicit coercion. The strict equality check can directly compare the values without the additional step of type conversion.

# Types of Funtions

- Normal
- Arrow
- Anonymous
- IIFE (Pattern)

# Parameter and Argument

- Parameters
  Definition: Parameters are variables listed as part of the function definition.

  `Example: function add(x, y) { return x + y; }`

- Arguments
  Definition: Arguments are values passed to the function when it is invoked.

  `Example: add(2, 3);`

# DRY Code

- Don't repeat code

# 5 Pillars of Code Quality

- Readable - 75%
- Maintainability - Code Debt
- Extensibility
- Testability
- Performance

# Copy by Value

# Copy by Reference

# Types of Loops
