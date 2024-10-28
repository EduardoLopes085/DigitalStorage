
import  '../main/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { useState } from 'react';





// import img3 from 'DigitalStorage/ProjetoDigitalStorage/src/assets/collection-3.png'

function Main(){
  const [selectedRadio, setSelectedRadio] = React.useState('radio1');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };
  
  return (
<div className='Container'>
    <div className="slider">
    <input type="radio"   className="radio_btn" id="radio1"  name="radio" />
    <input type="radio"   className="radio_btn" id="radio2" name="radio" />
    <input type="radio" className="radio_btn" id="radio3" name="radio" />
    <input type="radio" className="radio_btn" id="radio4" name="radio" />
  
    <div className="slides">
      <div className="slide" id="slide1">
        <div className='slide_content'>
          <span className='span_slide'>Melhores ofertas personalizadas</span>
          <span className='textPrincipal'>Queima de stoque Nike 🔥</span>
          <label className='label_slide'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</label>
          <button className='btn_slide'>Ver ofertas</button>

        </div>
        <div className='slide_img'>
          <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
          
        </div>
      </div>
      <div className="slide" id="slide1">
     
        <div className='slide_content'>
          <span>Melhores ofertas personalizadas</span>
          <span >🔥 Queima de stoque Nike </span>
          <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui.</label>
          <button className='btn_slide'>Ver ofertas</button>
        </div>
        <div id='img1' className='slide_img'>
            <img src="https://www.rodrigoroehniss.com.br/wp-content/uploads/2021/01/Saucony_Kinvara_12_Site-removebg-preview.png"alt=""/>
          </div>
      </div>
      <div className="slide" id="slide1">
        <div className='slide_content'>
          <span>Melhores ofertas personalizadas</span>
          <span className='textPrincipal'>Queima de stoque Nike 🔥</span>
          <label className='label_slide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui, cum sunt ipsam praesentium vitae nam dolore tempore laborum, fugit a? Numquam deserunt, omnis nihil accusamus temporibus quos.</label>
          <button className='btn_slide'>Ver ofertas</button>
        </div>
          <div className='slide_img'>
            <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
          </div>
      </div>
      <div className="slide" id="slide1">
        <div className='slide_content'>
          <span>Melhores ofertas personalizadas</span>
          <span className='textPrincipal'>Queima de stoque Nike 🔥</span>
          <label className='label_slide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui, cum sunt ipsam praesentium vitae nam dolore tempore laborum, fugit a? Numquam deserunt, omnis nihil accusamus temporibus quos.</label>
          <button className='btn_slide'>Ver ofertas</button>
        </div>
        <div className='slide_img'>
          <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
        </div>
      </div>
      <div className="slide" id="slide1">
        <div className='slide_content'>
          <span>Melhores ofertas personalizadas</span>
          <span className='textPrincipal'>Queima de stoque Nike 🔥</span>
          <label className='label_slide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui, cum sunt ipsam praesentium vitae nam dolore tempore laborum, fugit a? Numquam deserunt, omnis nihil accusamus temporibus quos.</label>
          <button className='btn_slide'>Ver ofertas</button>
        </div>
        <div className='slide_img'>
          <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
        </div>
      </div>
    </div>
  
    <div className="manual_navigation"> 
      <label htmlFor="radio1"  onChange={handleRadioChange}  checked={selectedRadio === 'radio1'}   className="manual_btn"></label>
      <label htmlFor="radio2"  onChange={handleRadioChange}  checked={selectedRadio === 'radio2'} className="manual_btn"></label>
      <label htmlFor="radio3"  onChange={handleRadioChange}  checked={selectedRadio === 'radio1'}className="manual_btn"></label>
      <label htmlFor="radio4"  onChange={handleRadioChange}  checked={selectedRadio === 'radio1'}className="manual_btn"></label>
    </div>
  </div>

  </div>
  );
}
    

export default Main;