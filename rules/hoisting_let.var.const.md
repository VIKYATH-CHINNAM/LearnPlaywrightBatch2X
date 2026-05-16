# JavaScript Hoisting: let, var, and const

## What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (function or global) before code execution. This means you can use variables and functions before they are declared in your code.

**Important:** Only declarations are hoisted, not initializations.

## Hoisting with `var`

### Behavior
- `var` declarations are hoisted to the top of their function or global scope.
- They are automatically initialized with `undefined`.
- Accessing a `var` variable before its declaration returns `undefined` (no error).

### Example
```js
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### Rules
- Hoisted and initialized with `undefined`.
- Function-scoped (or globally scoped if declared outside a function).
- Can be redeclared and updated.

## Hoisting with `let`

### Behavior
- `let` declarations are hoisted to the top of their block scope.
- They are **not** initialized. Accessing them before declaration throws a `ReferenceError`.
- The period between the start of the scope and the declaration is called the **Temporal Dead Zone (TDZ)**.

### Example
```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // 10
```

### Rules
- Hoisted but not initialized (TDZ applies).
- Block-scoped.
- Cannot be redeclared in the same scope, but can be updated.

## Hoisting with `const`

### Behavior
- `const` declarations are hoisted to the top of their block scope.
- Like `let`, they are **not** initialized and are subject to the TDZ.
- Must be initialized at the time of declaration.

### Example
```js
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
console.log(z); // 15
```

### Rules
- Hoisted but not initialized (TDZ applies).
- Block-scoped.
- Must be assigned a value during declaration.
- Cannot be redeclared or reassigned.

## Temporal Dead Zone (TDZ)

### Definition
The Temporal Dead Zone (TDZ) is the period between entering the scope of a `let` or `const` variable and its actual declaration in code. During this zone, the variable exists but cannot be accessed. Attempting to access it throws a `ReferenceError`.

### How TDZ Works
1. JavaScript engine scans the code and hoists `let` and `const` declarations to the top of their block scope.
2. Unlike `var`, these variables are **not initialized** with `undefined`.
3. From the start of the block until the line where the variable is declared, it is in the TDZ.
4. Once the declaration line is executed, the variable exits the TDZ and becomes usable.

### Example
```js
{
  // TDZ starts here for 'a'
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  
  let a = 5; // TDZ ends here
  console.log(a); // 5
}
```

### TDZ with Default Parameters
```js
function foo(x = y, y = 2) {
  return [x, y];
}
foo(); // ReferenceError: Cannot access 'y' before initialization
```
In this example, `x` tries to use `y` in its default value, but `y` is still in the TDZ.

### TDZ and `typeof`
Unlike `var`, using `typeof` on a `let` or `const` variable in the TDZ throws an error instead of returning `"undefined"`.
```js
console.log(typeof undeclaredVar); // "undefined"

console.log(typeof tdzVar); // ReferenceError
let tdzVar = 10;
```

### Why TDZ Exists
- Catches errors early: Prevents accidental use of variables before they are properly initialized.
- Enforces safer coding practices: Encourages declaring variables before use.
- Improves `const` reliability: Ensures `const` variables are always initialized before access.

## Comparison Table

| Feature          | `var`              | `let`              | `const`            |
|------------------|--------------------|--------------------|--------------------|
| Hoisted          | Yes                | Yes                | Yes                |
| Initialized      | `undefined`        | No (TDZ)           | No (TDZ)           |
| Scope            | Function/Global    | Block              | Block              |
| Redeclaration    | Allowed            | Not allowed        | Not allowed        |
| Reassignment     | Allowed            | Allowed            | Not allowed        |

## Best Practices
- Avoid relying on hoisting; declare variables at the top of their scope.
- Prefer `const` by default, use `let` when reassignment is needed.
- Avoid `var` due to its confusing scoping and hoisting behavior.
- Be aware of the Temporal Dead Zone to prevent `ReferenceError`s.
