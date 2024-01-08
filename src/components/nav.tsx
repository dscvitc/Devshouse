import React from 'react';
import '../styles/styles.css';
import Image from '../images/Group 130.svg'
import VIT from '../images/Google Developer Student Clubs Vellore Institute of Technology, Chennai.svg'
const Mycomponent: React.FC = () => {
  const myStyles: React.CSSProperties = {
    fontSize: '20px',
    color: 'white',
    overflow: 'hidden',
  };

  const li_css: React.CSSProperties = {
    display: 'inline',
    paddingLeft: '10px',
    paddingRight: '25px',
    paddingBottom: '20px',
    lineHeight: '25.52px',
    fontWeight: 400,
    fontFamily: "'Space Grotesk', sans-serif",
  };

  const right: React.CSSProperties = {
    float: 'right',
    paddingTop: '10px',
    paddingBottom : '10px',
  };


  return (
    <>
      <main className='main'>
        <div style={myStyles} className='nav'>
        <div className='image-container'>
          <img src={Image.src} alt="My Image" />
        </div>
        <div className='vit'>
          <img src={VIT.src} alt="My Image" className='vit'/>
        </div>
          <ul>
            <div style={right}>
              <li style={li_css}><a href="#">About</a></li>
              <li style={li_css}><a href="#">Themes</a></li>
              <li style={li_css}><a href="#">Timeline</a></li>
              <li style={li_css}><a href="#">Teams</a></li>
              <li style={li_css}><a href="#">Sponsors</a></li>
              <li style={li_css}><a href="#">FAQs</a></li>
              <li style={li_css}><a href="#">Contact us</a></li>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Mycomponent;
