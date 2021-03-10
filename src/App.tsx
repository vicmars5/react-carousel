import React, { useState } from 'react'
import classnames from 'classnames'
import './App.scss'

const pictures = [{
  url: 'https://picsum.photos/id/874/900/600'
}, {
  url: 'https://picsum.photos/id/814/900/600'
}, {
  url: 'https://picsum.photos/id/1006/900/600'
}, {
  url: 'https://picsum.photos/id/1005/900/600'
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

enum MoveDirection {
  stopped = 0,
  left = 1,
  right = 2,
}

function App (): JSX.Element {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [movingTo, setMovingto] = useState<MoveDirection>(MoveDirection.stopped)

  return (
    <div className="container">
      <div>
        <div className='carousel-wrapper'>
          <div className='carousel'>
            <img
              className='carousel__item-back'
              src={pictures[0].url}
            />
            {pictures.map((p, i) => {
              const isPrev = isPrevItem(selectedImageIndex, i, pictures.length)
              const isNext = isNextItem(selectedImageIndex, i, pictures.length)
              const shouldHide = (isPrev && movingTo === MoveDirection.left) ||
                (isNext && movingTo === MoveDirection.right)
              console.log('shoudl hide', shouldHide)
              return (
                <img
                  className={classnames(
                    'carousel__item',
                    i === selectedImageIndex ? 'carousel__item-active' : '',
                    isPrev ? 'carousel__item-prev' : '',
                    isNext ? 'carousel__item-next' : '',
                    shouldHide ? 'carousel__item-hide' : ''
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
        <div>
          <button
            onClick={() => {
              setSelectedImageIndex(
                getPrevItemIndex(selectedImageIndex, pictures.length)
              )
              setMovingto(MoveDirection.left)
            }}
          >
            Previous
          </button>
          <button
            onClick={(ev) => {
              setSelectedImageIndex(
                getNextItemIndex(selectedImageIndex, pictures.length)
              )
              setMovingto(MoveDirection.right)
            }}
          >
            Next
          </button>
          <b>{selectedImageIndex}</b>
          <b>{movingTo}</b>
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
