# JavaScript Operators

## What is an Operator?
An operator is a symbol that performs operations on operands (values or variables). JavaScript supports various types of operators for arithmetic, comparison, assignment, logic, and more.

## 1. Arithmetic Operators
Used to perform mathematical operations between numbers.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `6 / 3` | `2` |
| `%` | Modulus (Remainder) | `5 % 3` | `2` |
| `**` | Exponentiation | `2 ** 3` | `8` |
| `++` | Increment | `x++` | `x + 1` |
| `--` | Decrement | `x--` | `x - 1` |

## 2. Assignment Operators
Used to assign values to variables.

| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `x = 5` | `x = 5` |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |
| `**=` | `x **= 3` | `x = x ** 3` |

## 3. Comparison Operators
Used to compare two values and return a boolean (`true` or `false`).

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `==` | Equal to (loose) | `5 == '5'` | `true` |
| `===` | Strict equal to | `5 === '5'` | `false` |
| `!=` | Not equal to (loose) | `5 != '5'` | `false` |
| `!==` | Strict not equal to | `5 !== '5'` | `true` |
| `>` | Greater than | `5 > 3` | `true` |
| `<` | Less than | `5 < 3` | `false` |
| `>=` | Greater than or equal to | `5 >= 5` | `true` |
| `<=` | Less than or equal to | `5 <= 3` | `false` |

## 4. Logical Operators
Used to combine multiple boolean expressions.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&&` | Logical AND | `true && false` | `false` |
| `||` | Logical OR | `true || false` | `true` |
| `!` | Logical NOT | `!true` | `false` |
| `??` | Nullish Coalescing | `null ?? 5` | `5` |

## 5. Bitwise Operators
Used to perform operations on binary representations of numbers.

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `&` | AND | `5 & 1` | `1` |
| `|` | OR | `5 | 1` | `5` |
| `^` | XOR | `5 ^ 1` | `4` |
| `~` | NOT | `~5` | `-6` |
| `<<` | Left shift | `5 << 1` | `10` |
| `>>` | Sign-propagating right shift | `5 >> 1` | `2` |
| `>>>` | Zero-fill right shift | `-5 >>> 1` | `2147483645` |

## 6. Ternary (Conditional) Operator
A shorthand for `if...else` statements.

**Syntax:** `condition ? exprIfTrue : exprIfFalse`

```js
let age = 18;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status); // 'Adult'
```

## 7. Type Operators

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| `typeof` | Returns the type of a variable | `typeof 'hello'` | `'string'` |
| `instanceof` | Checks if an object is an instance of a class | `[] instanceof Array` | `true` |

## 8. Other Operators

- **Comma Operator (`,`)**: Evaluates multiple expressions and returns the last one.
  ```js
  let x = (1, 2, 3);
  console.log(x); // 3
  ```
- **Optional Chaining (`?.`)**: Safely accesses nested properties without throwing errors if a reference is nullish.
  ```js
  let user = { address: { city: 'New York' } };
  console.log(user?.address?.city); // 'New York'
  console.log(user?.phone?.number); // undefined
  ```
- **Spread/Rest Operator (`...`)**: Expands an iterable or collects remaining arguments.
  ```js
  // Spread
  let arr1 = [1, 2];
  let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
  
  // Rest
  function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  }
  ```

## Best Practices
- Prefer `===` and `!==` over `==` and `!=` to avoid type coercion issues.
- Use `??` instead of `||` when you only want to fallback for `null` or `undefined`.
- Keep expressions simple; avoid chaining too many operators in a single line.
