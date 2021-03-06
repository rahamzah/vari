/* global describe, it, before */

import chai from 'chai'
import E from '../src/expectedValue.js'

chai.expect()
const expect = chai.expect

describe('Expected Value', () => {
  describe('Given a property', () => {
    describe('Given an array of values', () => {
      it('should return the average', () => {
        let arr = [{num: 1}, {num: 2}, {num: 3}]
        expect(E(arr, 'num')).to.equal(2)
      })
    })
    describe('Given an empty array', () => {
      it('should return 0', () => {
        let arr = []
        expect(E(arr, 'num')).to.equal(0)
      })
    })
  })
  describe('Not given a property', () => {
    describe('Given an array of values', () => {
      it('should return the average', () => {
        let arr = [1, 2, 3, 4, 5]
        expect(E(arr)).to.equal(3)
      })
    })
    describe('Given an empty array', () => {
      it('should return 0', () => {
        let arr = []
        expect(E(arr)).to.equal(0)
      })
    })
  })
})
