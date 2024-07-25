import React from 'react'
import './Social.css'
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import appstore from "../assets/images/appstore.png";
import maps from "../assets/images/maps.png";
import sound from "../assets/images/soundcloud.png";
import phone from "../assets/images/phone.png";
import snapchat from "../assets/images/snapchat.png";
import paypal from "../assets/images/paypal.png";
// import {Link} form 'react-router-dom';

const Social = () => {

    const social = [
        {
          id: "1",
          img: instagram,
          link: "https://www.instagram.com/",
          name: "Instagram",
        },
        {
          id: "2",
          img: linkedin ,
          link: "https://www.linkedin.com/in/abdullahqaisar-/",
          name: "LinkedIn",
        },
        {
          id: "3",
          img:  appstore ,
          link: "https://music.apple.com/us/browse",
          name: "App Store",
        },
        {
          id: "4",
          img: maps,
          link: "https://www.google.com/maps",
          name: "Maps",
        },
        {
          id: "5",
          img: phone,
          link: "https://zoom.us/",
          name: "Phone",
        },
        {
          id: "6",
          img:  paypal,
          link: "https://www.paypal.com/pk/home",
          name: "PayPal",
        },
        {
          id: "7",
          img:  sound ,
          link: "https://www.instagram.com/",
          name: "Sound Cloud",
        }
        ,
        {
          id: "8",
          img: snapchat,
          link: "https://music.apple.com/us/browse",
          name: "Snapchat",
        },
        {
          id: "6",
          img:  sound,
          link: "",
          name: "Sound",
        },
        {
          id: "7",
          img:  instagram ,
          link: "",
          name: "Instagram",
        },
        {
          id: "8",
          img: snapchat,
          link: "",
          name: "Snapchat",
        }
        ,
        {
          id: "8",
          img: maps,
          link: "",
          name: "Music",
        }
        ,
        {
          id: "8",
          img: maps,
          link: "",
          name: "Music",
        }
      ];

  return (
    <>
    <div className="social">
        <div className='socialitems'>
            {social.map((item) => (
              <div className='socialicons' key={item.id}>
                <a style={{ textDecoration:"none", color:"black"}} href={item.link} target="_blank">
                  <img  src={item.img} alt={item.name} />
                 <p>{item.name}</p> 
                </a>
              </div> 
            ))}
      </div>
      </div>
    </>
  )
}

export default Social