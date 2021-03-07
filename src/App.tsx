import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const [selectedImageId, setSelectedImageId] = useState(0);

  return (
    <div className="container">
      <div>
          <button
              onClick={() => setSelectedImageId(selectedImageId - 1)
              }
          >
              Previous
          </button>
          <button>Next</button>
      </div>
    </div>
  )
}

export default App
