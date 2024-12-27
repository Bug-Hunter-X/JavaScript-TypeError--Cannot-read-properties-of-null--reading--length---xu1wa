function foo(x) {
  if (x === null || x === undefined) {
    return 0; // Handle null or undefined cases
  }
  if (typeof x.length !== 'number') {
    console.error('Error: Input must be an array or string.');
    return -1; // or throw an error
  }
  return x.length;
}