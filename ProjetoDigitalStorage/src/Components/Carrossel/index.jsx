import React, { useState } from 'react';
import '../main/main.css';

function Carrossel() {
  const [selectedRadio, setSelectedRadio] = useState('radio1');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className='CarrosselContainer'>
      <div className="slider">
        <input type="radio" className="radio_btn" id="radio1" name="radio" onChange={handleRadioChange} checked={selectedRadio === 'radio1'} />
        <input type="radio" className="radio_btn" id="radio2" name="radio" onChange={handleRadioChange} checked={selectedRadio === 'radio2'} />
        <input type="radio" className="radio_btn" id="radio3" name="radio" onChange={handleRadioChange} checked={selectedRadio === 'radio3'} />
        <input type="radio" className="radio_btn" id="radio4" name="radio" onChange={handleRadioChange} checked={selectedRadio === 'radio4'} />

        <div className="slides">
          <div className="slide" id="slide1">
            <div className='slide_content'>
              <span className='span_slide'>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
            </div>
          </div>
          <div className="slide" id="slide2">
            <div className='slide_content'>
              <span>Melhores ofertas personalizadas</span>
              <span>🔥 Queima de estoque Nike </span>
              <label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div id='img1' className='slide_img'>
              <img src="https://www.rodrigoroehniss.com.br/wp-content/uploads/2021/01/Saucony_Kinvara_12_Site-removebg-preview.png" alt="" />
            </div>
          </div>
          <div className="slide" id="slide3">
            <div className='slide_content'>
              <span>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui, cum sunt ipsam praesentium vitae nam dolore tempore laborum, fugit a? Numquam deserunt, omnis nihil accusamus temporibus quos.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
            </div>
          </div>
          <div className="slide" id="slide4">
            <div className='slide_content'>
              <span>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deleniti illo qui, cum sunt ipsam praesentium vitae nam dolore tempore laborum, fugit a? Numquam deserunt, omnis nihil accusamus temporibus quos.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="manual_navigation">
          <label htmlFor="radio1" className="manual_btn"></label>
          <label htmlFor="radio2" className="manual_btn"></label>
          <label htmlFor="radio3" className="manual_btn"></label>
          <label htmlFor="radio4" className="manual_btn"></label>
        </div>
      </div>
    </div>
  );
}

export default Carrossel;
