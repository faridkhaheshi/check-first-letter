const checkFirstCharacter = require("./index")

const inputs = [
  "A letter",
  "Capital",
  "something else",
  " including a space at the start",
  "123 ways",
]

const outputs = inputs.map(str => checkFirstCharacter(str))

outputs.forEach((o, i) =>
  console.log(
    `"${inputs[i]}" of type "${typeof inputs[i]}": ${o} of type ${typeof o}`
  )
)
