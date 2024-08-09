import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

function Loading() {
  return (
    <>
    <div className="loading-container">
        <HashLoader
  color="green"
  cssOverride={{}}
  loading
  size={100}
  speedMultiplier={1}
/>

    </div>
    </>
  )
}

export default Loading