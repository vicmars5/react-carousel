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

function isNextItem (
  selectedItemIndex: number,
  itemIndex: number,
  itemsLength: number
): boolean {
  return getNextItemIndex(selectedItemIndex, itemsLength) === itemIndex
}

function isPrevItem (
  selectedItemIndex: number,
  itemIndex: number,
  itemsLength: number
): boolean {
  return getPrevItemIndex(selectedItemIndex, itemsLength) === itemIndex
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
                  // i === 0 ? 'carousel__item-default' : '',
                  i === selectedImageIndex ? 'carousel__item-active' : '',
                  isPrevItem(selectedImageIndex, i, pictures.length)
                    ? 'carousel__item-prev'
                    : '',
                  isNextItem(selectedImageIndex, i, pictures.length)
                    ? 'carousel__item-next'
                    : ''
                )}
                // I usually don't recommend to use indexes as key but in this
                // particular case there are no risks involved
                key={i}
                src={p.url}
              />
            ))}
          </div>
        </div>
        <div>
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
        <div>
          <h1>title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusamus, aliquid distinctio ex facere id incidunt ipsam laborum
            minima minus nam natus numquam officiis omnis quisquam ut velit!
            Enim, vero?
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
