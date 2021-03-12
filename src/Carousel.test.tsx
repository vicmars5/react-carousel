import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Carousel, {
  getNextPictureIndex,
  getPrevPictureIndex,
  isNextPicture,
  isPrevPicture
} from './Carousel'

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
  describe('render component', () => {
    const pictures = [
      { url: 'https://picsum.photos/id/874/540/360' },
      { url: 'https://picsum.photos/id/814/540/360' },
      { url: 'https://picsum.photos/id/1006/540/360' },
      { url: 'https://picsum.photos/id/1005/540/360' }
    ]
    it('simple render', () => {
      const wrapper = shallow(
        <Carousel pictures={pictures} selectedPhotoIndex={0} />
      )
      expect(wrapper.find('.carousel__item'))
        .to.have.lengthOf(4)
    })
  })
})
