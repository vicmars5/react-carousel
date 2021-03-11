# Photos Carousel

Installation:
```
yarn add -D @vicmars5/react-carousel
```

Example of how to use Carousel
``` ts
import React from 'react'
import Carousel, { useCarousel } from '@vicmars5/react-carousel'
import '@vicmars5/react-carousel/dist/Carousel.css'

const pictures = [{
  url: 'https://picsum.photos/id/874/900/600'
}, {
  url: 'https://picsum.photos/id/814/900/600'
}, {
  url: 'https://picsum.photos/id/1006/900/600'
}, {
  url: 'https://picsum.photos/id/1005/900/600'
}]

function App (): JSX.Element {
  const {
    selectedPictureIndex,
    moveLeft,
    moveRight
  } = useCarousel({ picturesLength: pictures.length })
  return (
    <div>
      <div>
        <Carousel
          pictures={pictures}
          selectedPhotoIndex={selectedPictureIndex}
        />
      </div>
      <div>
        <div>
          <button
            onClick={moveLeft}
          >
            Previous
          </button>
          <button
            onClick={moveRight}
          >
            Next
          </button>
          <b>{selectedPictureIndex}</b>
        </div>
      </div>
    </div>
  )
}

export default App
```
