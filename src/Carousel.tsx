import React, { useState } from 'react'
import './App.scss'
import classnames from 'classnames'

function getNextPictureIndex (selectedPictureIndex: number, picturesLength: number): number {
  return (selectedPictureIndex + 1) % picturesLength
}

function getPrevPictureIndex (selectedPictureIndex: number, picturesLength: number): number {
  return (selectedPictureIndex - 1 + picturesLength) % picturesLength
}

function isNextPicture (
  selectedPictureIndex: number,
  pictureIndex: number,
  picturesLength: number
): boolean {
  return getNextPictureIndex(selectedPictureIndex, picturesLength) === pictureIndex
}

function isPrevPicture (
  selectedPictureIndex: number,
  pictureIndex: number,
  picturesLength: number
): boolean {
  return getPrevPictureIndex(selectedPictureIndex, picturesLength) === pictureIndex
}

export function useCarousel ({ picturesLength }: { picturesLength: number }): {
  selectedPictureIndex: number
  setSelectedPictureIndex: (index: number) => void
  moveRight: () => void
  moveLeft: () => void
} {
  const [selectedPictureIndex, setSelectedPictureIndex] = useState<number>(0)
  return {
    selectedPictureIndex,
    setSelectedPictureIndex,
    moveRight () {
      setSelectedPictureIndex(
        getNextPictureIndex(selectedPictureIndex, picturesLength)
      )
    },
    moveLeft () {
      setSelectedPictureIndex(
        getPrevPictureIndex(selectedPictureIndex, picturesLength)
      )
    }
  }
}

interface Picture {
  url: string
}

interface CarouselProps {
  pictures: Picture[]
  selectedPhotoIndex: number
}

function Carousel (props: CarouselProps): JSX.Element {
  const {
    selectedPhotoIndex,
    pictures
  } = props
  return (
    <div className='carousel-wrapper'>
      <div className='carousel'>
        <img
          className='carousel__item-back'
          src={pictures[0].url}
        />
        {pictures.map((p, i) => {
          const isPrev = isPrevPicture(selectedPhotoIndex, i, pictures.length)
          const isNext = isNextPicture(selectedPhotoIndex, i, pictures.length)
          return (
            <img
              className={classnames(
                'carousel__item',
                i === selectedPhotoIndex ? 'carousel__item-active' : '',
                isPrev ? 'carousel__item-prev' : '',
                isNext ? 'carousel__item-next' : ''
              )}
              // I usually don't recommend to use indexes as key but in this
              // particular case there are no risks involved
              key={i}
              src={p.url}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Carousel
