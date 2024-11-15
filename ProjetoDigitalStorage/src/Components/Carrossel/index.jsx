import { useState, useEffect } from 'react';
import '../Carrossel/Carrossel.css';
import img from '../../public/Ornament_11.png'; // Verifique o caminho da imagem

function Main() {
  const [currentSlide, setCurrentSlide] = useState(0); // Controla o índice do slide
  const [isPaused, setIsPaused] = useState(false); // Controla se o carrossel está pausado
  const slides = [ // Um array de objetos representando os slides
    {
      id: 'slide1',
      image: 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png',
      title: 'Melhores ofertas personalizadas',
      description: 'Queima de estoque Nike 🔥',
      label: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
    },
    {
      id: 'slide2',
      image: 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png',
      title: 'Ofertas imperdíveis',
      description: 'Promoções exclusivas Nike 🔥',
      label: 'Aproveite os melhores preços e descontos para você!',
    },
    {
      id: 'slide3',
      image: 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png',
      title: 'Novidades quentes',
      description: 'Coleção de inverno Nike 🔥',
      label: 'Roupas, tênis e acessórios com descontos incríveis!',
    },
    {
      id: 'slide4',
      image: 'https://i.ibb.co/Jysdmz6/White-Sneakers-PNG-Clipart-2.png',
      title: 'Promoções de fim de temporada',
      description: 'Queima de estoque com preços baixos!',
      label: 'Adquira os melhores produtos com descontos arrasadores.',
    }
  ];
  const delay = 1500; 

  // Função para alternar para o próximo slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // UseEffect para mudar o slide a cada 3 segundos, mas só se o carrossel não estiver pausado
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, delay);
      return () => clearInterval(timer); // Limpa o intervalo ao desmontar o componente
    }
  }, [isPaused]); // O useEffect agora depende de `isPaused`

  return (
    <div className='Container'>
      <div
        className="slider"
        onMouseEnter={() => setIsPaused(true)} // Pausa o carrossel quando o mouse entra
        onMouseLeave={() => setIsPaused(false)} // Retoma o carrossel quando o mouse sai
      >
        {/* Não é mais necessário os inputs radio */}
        <div className="slides" style={{ marginLeft: `-${currentSlide * 100}%` }}>
          {slides.map((slide) => (
            <div className="slide" id={slide.id} key={slide.id}>
              <div className='slide_content'>
                <span className='span_slide'>{slide.title}</span>
                <span className='textPrincipal'>{slide.description}</span>
                <label className='label_slide'>{slide.label}</label>
                <button className='btn_slide'>Ver ofertas</button>
              </div>
              <div className='slide_img'>
                <img src={slide.image} alt={slide.title} />
                <div className='ImgContainerCarrosel'>
                  <img src={img} alt="Ornamento" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação manual (se desejar) */}
        <div className="manual_navigation">
          {slides.map((slide, index) => (
            <label
              key={slide.id}
              className={`manual_btn ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
