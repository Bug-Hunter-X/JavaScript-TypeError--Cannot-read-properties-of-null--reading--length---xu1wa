# JavaScript TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error and its solution.  The `bug.js` file contains code that throws a `TypeError` when the input is `null`.  The `bugSolution.js` file provides a corrected version with robust error handling.

## Bug
The original code attempts to access the `length` property of a variable that might be `null`. This results in a `TypeError` because you cannot read properties of `null`.

## Solution
The improved code explicitly checks for `null` and also validates that the input is of a type with a length property before accessing it.  This prevents the error and makes the code more robust.