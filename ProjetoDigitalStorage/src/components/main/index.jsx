import React, { useState, useEffect } from 'react';
import '../main/main.css';
import img from '../../assets/Ornament 11.png'
// import 'bootstrap/dist/css/bootstrap.min.css';


function Main() {
  const [selectedRadio, setSelectedRadio] = useState('radio1');
  const radios = ['radio1', 'radio2', 'radio3', 'radio4'];
  const delay = 3000 ;

  // Função para alternar para o próximo slide
  const nextSlide = () => {
    const currentIndex = radios.indexOf(selectedRadio);
    const nextIndex = (currentIndex + 1) % radios.length;
    setSelectedRadio(radios[nextIndex]);
  };

  useEffect(() => {
    // Configura um temporizador específico apenas para o componente
    const timer = setInterval(nextSlide, delay);
    return () => clearInterval(timer);
  }, [selectedRadio]);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className='Container'>
      <div className="slider">
        {radios.map((radio, index) => (
          <input
            key={radio}
            type="radio"
            id={radio}
            name="radio"
            checked={selectedRadio === radio}
            onChange={handleRadioChange}
          />
        ))}

        <div className="slides">
          <div className="slide" id="slide1">
            <div className='slide_content'>
              <span className='span_slide'>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Sneakers" />
              <div className='ImgContainerCarrosel'>
                <img src={img}></img>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="slide" id="slide2">
            <div className='slide_content'>
              <span className='span_slide'>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Sneakers" />
              <div className='ImgContainerCarrosel'>
                <img src={img}></img>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="slide" id="slide3">
            <div className='slide_content'>
              <span className='span_slide'>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Sneakers" />
              <div className='ImgContainerCarrosel'>
                <img src={img}></img>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="slide" id="slide4">
            <div className='slide_content'>
              <span className='span_slide'>Melhores ofertas personalizadas</span>
              <span className='textPrincipal'>Queima de estoque Nike 🔥</span>
              <label className='label_slide'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</label>
              <button className='btn_slide'>Ver ofertas</button>
            </div>
            <div className='slide_img'>
              <img src="https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png" alt="Sneakers" />
              <div className='ImgContainerCarrosel'>
                <img src={img}></img>
              </div>
            </div>
          </div>
        </div>

        <div className="manual_navigation">
          {radios.map((radio) => (
            <label key={radio} htmlFor={radio} className="manual_btn"></label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
