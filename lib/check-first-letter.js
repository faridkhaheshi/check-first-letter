const checkFirstLetter = str => {
  if (typeof str !== "string") throw new TypeError("wrong input type")
  return /^[A-Z].*/g.test(str)
}

module.exports = checkFirstLetter
