const { assert } = require("chai")

const checkFirstLetter = require("../index")

describe("The library", () => {
  it("exports a function", () => {
    console.log(checkFirstLetter)
    assert.isFunction(checkFirstLetter)
  })
})
