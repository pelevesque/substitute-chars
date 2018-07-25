'use strict'

const findChar = require('@pelevesque/find-char')
const insertString = require('@pelevesque/insert-string')

function findSubstitutionIndexes (str, substitutions) {
  for (let i = 0, len = substitutions.length; i < len; i++) {
    substitutions[i][0] = findChar(substitutions[i][0], str)
  }
}

function makeSubstitutions (str, substitutions) {
  for (let i = 0, len = substitutions.length; i < len; i++) {
    for (let j = 0, len = substitutions[i][0].length; j < len; j++) {
      str = insertString(str, substitutions[i][1], substitutions[i][0][j], -1)
    }
  }
  return str
}

module.exports = (str, substitutions) => {
  findSubstitutionIndexes(str, substitutions)
  return makeSubstitutions(str, substitutions)
}
