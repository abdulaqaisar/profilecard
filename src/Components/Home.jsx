import React from 'react'
import './Home.css'
import image from '../assets/images/greenbg.jpg'
import { SiGooglemessages } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import profileimage from "../assets/images/m3.png";
import logoimage from "../assets/images/logoimg.jpg";
const Home = () => {
  return (
    <>
    <div className="home">
      <div className='bg'>
        <img src={image} alt="" />
        <div className="child">
          <img src={profileimage} alt="" />
          <div className="imgicon">
            <img src={logoimage} alt="" />
          </div>
        </div>
      </div>
      <div className="icons">
        <SiGooglemessages/>
        <IoIosArrowForward/>
      </div>
    </div>
    </>
  )
}

export default Home