/* global describe, it */
'use strict'

const expect = require('chai').expect
const substituteChars = require('../index')

describe('#substituteChars()', () => {
  it('should substitute one char a single time', () => {
    const str = 'abc'
    const substitutions = [
      ['a', '1']
    ]
    const result = substituteChars(str, substitutions)
    const expected = '1bc'
    expect(result).to.equal(expected)
  })

  it('should substitute one char multiple times contiguously', () => {
    const str = 'abbc'
    const substitutions = [
      ['b', '2']
    ]
    const result = substituteChars(str, substitutions)
    const expected = 'a22c'
    expect(result).to.equal(expected)
  })

  it('should substitute one char multiple times non-contiguously', () => {
    const str = 'abacada'
    const substitutions = [
      ['a', 'e']
    ]
    const result = substituteChars(str, substitutions)
    const expected = 'ebecede'
    expect(result).to.equal(expected)
  })

  it('should substitute many chars a sinle time each', () => {
    const str = 'abcdef'
    const substitutions = [
      ['a', '1'],
      ['b', '2'],
      ['c', '3'],
      ['d', '4'],
      ['e', '5'],
      ['f', '6']
    ]
    const result = substituteChars(str, substitutions)
    const expected = '123456'
    expect(result).to.equal(expected)
  })

  it('should substitute many chars multiple times', () => {
    const str = 'abbcdaecefe'
    const substitutions = [
      ['a', '1'],
      ['b', '2'],
      ['c', '3'],
      ['d', '4'],
      ['e', '5'],
      ['f', '6']
    ]
    const result = substituteChars(str, substitutions)
    const expected = '12234153565'
    expect(result).to.equal(expected)
  })

  it('should swap between multiple chars', () => {
    const str = 'abccba'
    const substitutions = [
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'a']
    ]
    const result = substituteChars(str, substitutions)
    const expected = 'bcaacb'
    expect(result).to.equal(expected)
  })
})
