import React, { useState } from 'react'
import classnames from 'classnames'
import './App.scss'

const pictures = [{
  url: 'https://picsum.photos/id/874/900/600'
}, {
  url: 'https://picsum.photos/id/814/900/600'
}, {
  url: 'https://picsum.photos/id/1006/900/600'
}]

function getNextItemIndex (selectedItemIndex: number, itemsLength: number): number {
  return (selectedItemIndex + 1) % itemsLength
}

function getPrevItemIndex (selectedItemIndex: number, itemsLength: number): number {
  return (selectedItemIndex - 1 + itemsLength) % itemsLength
}

function isNextItem (selectedItemIndex: number, itemIndex: number): boolean{
  return (selectedItemIndex + 1) === itemIndex
}

function isPrevItem (selectedItemIndex: number, itemIndex: number): boolean {
  return (selectedItemIndex - 1) === itemIndex
}

function App (): JSX.Element {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  return (
    <div className="container">
      <div>
        <div className='carousel-wrapper'>
          <div className='carousel'>
            {pictures.map((p, i) => (
              <img
                className={classnames(
                  'carousel__item',
                  i === 0 ? 'carousel__item-default' : '',
                  i === selectedImageIndex ? 'carousel__item-active' : '',
                  isPrevItem(selectedImageIndex, i) ? 'carousel__item-prev' : '',
                  isNextItem(selectedImageIndex, i) ? 'carousel__item-next' : ''
                )}
                // I usually don't recommend to use indexes as key but in this
                // particular case there are no risks involved
                key={i}
                src={p.url}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() =>
            setSelectedImageIndex(
              getPrevItemIndex(selectedImageIndex, pictures.length)
            )
          }
        >
          Previous
        </button>
        <button
          onClick={(ev) =>
            setSelectedImageIndex(
              getNextItemIndex(selectedImageIndex, pictures.length)
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
