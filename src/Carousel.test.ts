import { expect } from 'chai'
import { getNextPictureIndex, getPrevPictureIndex } from './Carousel'

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
})
