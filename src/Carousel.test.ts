import { expect } from 'chai'
import { getNextPictureIndex, getPrevPictureIndex, isNextPicture, isPrevPicture } from './Carousel'

describe('Carousel', () => {
  describe('getNextPictureIndex', () => {
    it('at the beginning', () => {
      const nextPicture = getNextPictureIndex(0, 3)
      expect(nextPicture).to.equal(1)
    })
    it('at the beginning', () => {
      const nextPicture = getNextPictureIndex(2, 3)
      expect(nextPicture).to.equal(0)
    })
  })
  describe('getPrevPictureIndex', () => {
    it('at the beginning', () => {
      const prevPicture = getPrevPictureIndex(0, 3)
      expect(prevPicture).to.equal(2)
    })
    it('at the end', () => {
      const prevPicture = getPrevPictureIndex(2, 3)
      expect(prevPicture).to.equal(1)
    })
  })
  describe('isNextPicture', () => {
    it('at the beginning', () => {
      const isNext = isNextPicture(0, 1, 3)
      expect(isNext).to.equal(true)
    })
    it('at the end', () => {
      const isNext = isNextPicture(2, 0, 3)
      expect(isNext).to.equal(true)
    })
  })
  describe('isPrevPicture', () => {
    it('at the beginning', () => {
      const isPrev = isPrevPicture(0, 2, 3)
      expect(isPrev).to.equal(isPrev)
    })
    it('at the end', () => {
      const isPrev = isPrevPicture(2, 1, 3)
      expect(isPrev)
    })
  })
})
