import React from 'react'
import Phone from './components/Phone'
import Tv from './components/Tv'
import Comments from './components/Comments'

const App = () => {
  return (
    <>
      <div className="section-one">
        <Phone />
        <Tv />
      </div>
      <Comments />
    </>
  )
}

export default App

