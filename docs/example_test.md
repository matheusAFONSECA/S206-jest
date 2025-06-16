# 🧪 Example Test

This section demonstrates how to write a basic unit test using **Jest**. It uses a simple function `sum(a, b)` to illustrate how the test framework works.

---

### `src/utils/sum.js`

This file contains a utility function that takes two numbers and returns their sum:

```js
export default function sum(a, b) {
  return a + b;
}
```

---

### `src/tests/sum.test.js`

This is the unit test file for the `sum` function. Jest's `test()` function is used to define a test case, and `expect()` is used to assert the expected result.

```js
import sum from '../utils/sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

- The `require` statement imports the `sum` function.
- The `test()` function takes two arguments: the test description and a callback with the test logic.
- `expect(sum(1, 2)).toBe(3)` checks whether the result of the `sum` function is exactly 3.

---

### 🧪 Run the Tests

Use the script defined in `package.json` to execute all tests in the project:

```bash
npm test
```

Jest will automatically look for files with the `.test.js` or `.spec.js` extension and run all test suites found.
