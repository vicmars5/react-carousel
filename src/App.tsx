import React, { useState } from 'react'
import './App.css'

function App (): JSX.Element {
  const [selectedImageId, setSelectedImageId] = useState(0)

  return (
    <div className="container">
      <div>
          <button
              onClick={() => setSelectedImageId(selectedImageId - 1)}
          >
              Previous
          </button>
          <button
            onClick={() => setSelectedImageId(selectedImageId + 1)}
          >
            Next
          </button>
      </div>
    </div>
  )
}

export default App
