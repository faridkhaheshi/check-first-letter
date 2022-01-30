# Check First Character

This function checks the first character of a string and returns a Boolean. If the first character of the string is uppercase [A-Z] it return `true` and if the first character is not uppsercase it returns `false`.

## How to use

To use the function import it from the root of the project:

```
git clone git@github.com:faridkhaheshi/check-first-letter.git

cd check-first-letter

touch test.js
```

In the test file, import the function using the following require statement:

```
const checkFirstCharacter = require('./index')

const doesStartWithCapital = checkFirstCharacter('Something in Capital')
```

## Running tests

To run test cases, run `npm run test` after installing dependencies using `npm install`.

## See samples

To see samples, run `npm run start` after installing dependencies using `npm install`.
