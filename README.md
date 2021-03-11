# Photos Carousel

A lightweight ultra simple component to create responsive carousels.

![](docs/react-carousel-photos-preview.gif)

Installation:
```
yarn add -D react-photo-carousel
```

Example of how to use Carousel
``` ts
import React from 'react'
import './App.scss'
import Carousel, { useCarousel } from 'react-photo-carousel'
import 'react-photo-carousel/dist/Carousel.css'

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
    <div className="container">
      <div>
        <Carousel
          pictures={pictures}
          selectedPhotoIndex={selectedPictureIndex}
        />
      </div>
      <div>
        <div>
          <button onClick={moveLeft}>
            Previous
          </button>
          <button onClick={moveRight}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
```

## Why you should use this library
* React compatible
* Simple to use
* Light weight:
    * 855 byte of CSS
    * 3 KB of JS
* TypeScript compatible
* Free of design: There are no buttons, or any other CSS classes than the necessary for the animation and responsiveness.
* Responsive design

## Constrains
* All images should have the same aspect ratio.
* Only works with React 17+

## Browsers compatibility
This is the list of tested browsers in `mac OS 11.1 BigSur`
* Safari `14.0.2`
* Firefox `86.0`
* Chromium `89.0.4389.72`

## How it works?
`react-photo-carousel` uses CSS `transform` property to create smooth animations without repainting any other part of the DOM.

![](docs/react-photo-carousel-memory.gif)

There are other options, of carousel libraries and alternatives to this one like:
* [Glider](https://nickpiscitelli.github.io/Glider.js/), is also a high performance Carousel library, with a lot of options of carousel to choose from. This one is not specially developed for any frontend library.
* [Slick](https://nickpiscitelli.github.io/Glider.js/): I personally think Glider is a best option, but this one is also a really complete library, but sadly it repaints other elements in the DOM, so it doesn’t have the best performance you can get.

But if you are looking for a simple, react compatible, no design, light weight and high performance solution this one is really good for you.

