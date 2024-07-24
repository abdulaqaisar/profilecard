import React from 'react'
import './Social.css'
import instagram from "../assets/images/insta.png";
import linkedin from "../assets/images/linkedin.png";
import maps from "../assets/images/maps.png";
import music from "../assets/images/music.png";
import paypal from "../assets/images/paypal.png";
import phone from "../assets/images/phone.png";
// import sound from "../assets/images/sound.png";
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
          img:  music ,
          link: "https://music.apple.com/us/browse",
          name: "Music",
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
          img:  instagram ,
          link: "https://www.instagram.com/",
          name: "Instagram",
        },
        {
          id: "8",
          img: music,
          link: "https://music.apple.com/us/browse",
          name: "Music",
        },
        {
          id: "6",
          img:  paypal,
          link: "",
          name: "PayPal",
        },
        {
          id: "7",
          img:  instagram ,
          link: "",
          name: "Instagram",
        }
        ,
        {
          id: "8",
          img: music,
          link: "",
          name: "Music",
        }
        ,
        {
          id: "8",
          img: music,
          link: "",
          name: "Music",
        }
        ,
        {
          id: "8",
          img: music,
          link: "",
          name: "Music",
        }
        ,
        {
          id: "8",
          img: music,
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
                 <p >{item.name}</p> 
                </a>
              </div> 
            ))}
      </div>
      </div>
    </>
  )
}

export default Social