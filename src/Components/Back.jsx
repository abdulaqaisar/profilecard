import React from 'react'
import Home from './Home'
import './Back.css'
const Back = () => {
  return (
    <>
    <div className="back">
    <Home/>
    <p style={{ fontWeight:"400" , color:'gray',alignItems:"baseline"}}>Designed by <span style={{ fontWeight:'bold' }}>Quily</span></p>
    </div>
    </>
  )
}

export default Back