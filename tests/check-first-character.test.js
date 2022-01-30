const { assert } = require("chai")

const checkFirstCharacter = require("../index")

describe("checkFirstLetter()", () => {
  let testInput
  let result

  afterEach(() => {
    console.log(
      `        for input "${testInput}" of type "${typeof testInput}" it returns ${result}`
    )
  })

  describe("wrong inputs", () => {
    it("throws an error if a non-string input is provided", () => {
      testInput = 12
      assert.throws(() => checkFirstCharacter(testInput))
    })

    it("throws an error if given an array of strings", () => {
      testInput = ["A-letter", "B-tail"]
      assert.throws(() => checkFirstCharacter(testInput))
    })
  })

  describe("positives", () => {
    it("returns true for a string that starts with a capital letter", () => {
      testInput = new Array(26)
        .fill(0)
        .map((_, index) => String.fromCharCode(65 + index) + "-tail")
      result = testInput.map(i => checkFirstCharacter(i))
      assert.deepEqual(result, new Array(26).fill(true))
    })
  })

  describe("negatives", () => {
    it("returns false for a string that starts with a lowercase capital", () => {
      testInput = new Array(26)
        .fill(0)
        .map((_, index) => String.fromCharCode(97 + index) + "-tail")
      result = testInput.map(i => checkFirstCharacter(i))
      assert.deepEqual(result, new Array(26).fill(false))
    })

    it("returns false for a string that starts with a number", () => {
      testInput = new Array(26).fill(0).map((_, index) => index + "-tail")
      result = testInput.map(i => checkFirstCharacter(i))
      assert.deepEqual(result, new Array(26).fill(false))
    })

    it("returns false for a string that starts with space", () => {
      testInput = " Hello"
      result = checkFirstCharacter(testInput)
      assert.strictEqual(result, false)
    })

    it("returns false for an empty string", () => {
      testInput = ""
      result = checkFirstCharacter(testInput)
      assert.strictEqual(result, false)
    })
  })
})
