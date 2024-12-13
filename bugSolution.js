function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error if null values are encountered
  }
  return a + b;
}

//Example Usage
console.log(foo(1, 2)); // 3

try {
  console.log(foo(null, 2)); // Throws an Error
} catch (error) {
  console.error(error.message); // 'Null values are not allowed.'
}

try {
  console.log(foo(1, null)); // Throws an Error
} catch (error) {
  console.error(error.message); // 'Null values are not allowed.'
}

try {
  console.log(foo(null, null)); // Throws an Error
} catch (error) {
  console.error(error.message); // 'Null values are not allowed.'
}
