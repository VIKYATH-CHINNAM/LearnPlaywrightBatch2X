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
