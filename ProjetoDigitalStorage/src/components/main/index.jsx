import React,{useState, useEffect} from 'react';
import  Style from  '../main/main.module.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../img/collection-1.png'
import img2 from '../img/collection-2.png'
import img3 from '../img/collection-3.png'
// import img3 from 'DigitalStorage/ProjetoDigitalStorage/src/assets/collection-3.png'

function Main(){

  return (
    <div className={Style.Container} >
        <Carousel  slide={false}>
          <Carousel.Item>
            <img src ={img1}/>
           
          </Carousel.Item>
          <Carousel.Item className={Style.ajs}>
          <img src ={img3}/>
           
          </Carousel.Item>
          <Carousel.Item>
          <img src ={img2}/>
           
          </Carousel.Item>
        </Carousel>
    </div>
  );
}
    

export default Main;