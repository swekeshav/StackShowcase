const add = require('./coolMath.cjs')

const result = add(2, 3)
console.log(`2 + 3 = ${result}`)

// Using CommonJS to import the 'add' function from 'coolMath.cjs' and test it