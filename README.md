# Unexpected Null Handling in JavaScript Addition Function

This repository demonstrates a potential bug in a JavaScript function that handles null values in an addition operation.  The function `foo` adds two numbers together, and if either input is null, it returns 0.

While this might seem like a reasonable approach, this approach could inadvertently mask other potential issues arising from unexpected null values.  A more robust solution should clearly indicate when null values are encountered by throwing an error or logging a warning.  This allows for better debugging and reduces chances of silent errors that are harder to detect.

The `bug.js` file contains the original buggy code, while `bugSolution.js` provides an improved version with better null handling. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code in both files and compare the results.  Notice how the `bugSolution` handles null values more gracefully, preventing unexpected 0 returns.