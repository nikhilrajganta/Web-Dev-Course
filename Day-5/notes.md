# Designing - what they do ?

- Designing should be done before coding start, Designers make the `prototype`.
- Choosing `Color pallate` for the application.
- Layout designing where the components should be placed(psychology).
- `Auto-layout & varient` in figma.

# SDLC

- Planning
- Anaysis
- Designing
- implementation
- Testing
- Maintaience

# 6 - Phases of SDLC

- `Anaylsis - Producr Owner,PM, CTO`
- `Design - UI/UX, System Architect`
- `Development - FE, BE`
- `Testing - Tester, DevOps, QA`
- `Deployment - Data Administator, DevOps`
- `Maintenance - Users, Testers, Support Team`

# Product vs Service Based Companies

# WaterFall vs Agile Methodologies

![alt text](<Waterfall vs agile ss.png>)

# Scrum Process

![alt text](<scrum processs ss.png>)

# Stand-Up (Scrum)

- What did you do yesterday ?
- What will you do today ?
- What is your way ?

# Kanban - Board Tickets Assigning

![alt text](<kanban tickets jira img.png>)

# Coding Standards

- These are meant to uniformly through out the code base.

## Coding Quality

## DRY

## Variables name

- Understandable / Descprictive
  ```js
  ex :
  let a = 50; //❌
  let age = 50; //✅
  ```
- camelCase
  ```js
  ex :
  let student_name = "Pavan"; //❌
  let studentName = "Pavan"; //✅
  ```
- Choose `let` over `var`, `const` over `let`

  ```js
  ex :
  let panCard = "CRCPG1234"; //❌
  const panCard = "CRCPG1234"; //✅
  const marks = [10,20,30]; //✅
  ```

- Write const case

  ```js
  ex :
  const piValue = 3.14; //❌
  const PI_VALUE = 3.14; //✅
  ```

# Errors (For Variables name)

- Reserved keywords (`if`, `for`)

```js
 ex :
 let if = "Pavan"; //❌
```

- Cannot start with number :

```js
 ex :
 let 2name = "Pavan"; //❌
```

- Cannot have special symbols ($,@,#,!) [except for `_`]

```js
 ex :
 let abc$123 = "Pavan"; //❌
 let abc_123 = "Pavan"; //✅
```

# Documentation

- Single line comment

```js
 ex :
//  let abc$123 = "Pavan"; //❌
//  let abc_123 = "Pavan"; //✅
```

- Multiple line comment

```js
/**
 ex :
 let abc$123 = "Pavan"; //❌
 let abc_123 = "Pavan"; //✅
*/
```
