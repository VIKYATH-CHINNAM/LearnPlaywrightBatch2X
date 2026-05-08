# JavaScript Identifier Rules and Keywords

## Identifier rules
- Identifiers are names for variables, functions, classes, parameters, and properties.
- Must start with a letter (A-Z, a-z), underscore `_`, or dollar sign `$`.
- Remaining characters can include letters, digits (0-9), underscores, and dollar signs.
- Cannot contain spaces or punctuation, except `_` and `$`.
- Are case-sensitive: `myVar` and `myvar` are different.

## Reserved keywords
- JavaScript keywords cannot be used as identifiers.
- Examples of reserved keywords:
  - `break`, `case`, `catch`, `class`, `const`, `continue`
  - `debugger`, `default`, `delete`, `do`, `else`, `export`
  - `extends`, `finally`, `for`, `function`, `if`, `import`
  - `in`, `instanceof`, `let`, `new`, `return`, `super`
  - `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`
  - `yield`, `await`

## Examples
- Valid identifiers:
  - `userName`
  - `_result`
  - `$total`
  - `value1`

- Invalid identifiers:
  - `1value` (starts with a digit)
  - `my-name` (contains a hyphen)
  - `var` (reserved keyword)
  - `import` (reserved keyword)

## Notes
- `let` and `const` are keywords for variable declarations, so they cannot be used as variable names.
- In strict mode, additional words may be reserved for future use.
- Using clear identifier names improves code readability and maintainability.
