import { useState } from 'react'
import ProfileCard from './Pages/ProfileCard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
    <>
    <ToastContainer style={{ position:"top-left" }}/>
    <ProfileCard/>
    </>
  )
}

export default App
