# Commenting Rules

## Comment Types

### Single-line comments
- Use `//` for single-line comments.
- Can be placed above a line of code or at the end of a line.

```js
// This is a single-line comment
let x = 5; // inline comment
```

### Multi-line comments
- Use `/* */` for multi-line comments.
- Useful for temporarily disabling blocks of code.

```js
/*
  This is a
  multi-line comment
*/
```

### JSDoc comments
- Use `/** */` for documentation comments.
- Follow JSDoc conventions for functions, classes, and parameters.

```js
/**
 * Calculates the total price with tax.
 * @param {number} amount - The base amount
 * @param {number} taxRate - The tax rate
 * @returns {number} Total amount including tax
 */
function calculateTotal(amount, taxRate) {
  return amount + amount * taxRate;
}
```

## Best Practices
- Write comments that explain **why**, not **what** (the code shows what).
- Keep comments up to date when code changes.
- Use JSDoc for public APIs and functions.
- Avoid obvious comments like `// increment i by 1`.

## VS Code Shortcuts

| Action | Windows | macOS |
|--------|---------|-------|
| Toggle line comment | `Ctrl + /` | `Cmd + /` |
| Toggle block comment | `Shift + Alt + A` | `Shift + Option + A` |
| Toggle line comment (selected JS code) | `Ctrl + K, Ctrl + /` | `Cmd + K, Cmd + /` |
