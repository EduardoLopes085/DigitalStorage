import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainContent from './Components/Main'
import MainBottom from './Components/Main_bottom'
import MainCards from './Components/MainCards'
// import ProductCard from './Components/ProductCard'
import Carrossel from './Components/Carrossel'

function App() {
  

  return (
    <>
      <Header/>

      <Carrossel/> 

      <MainContent/> 
      
      <MainCards/>

      <MainBottom/>

      <Footer/>

      {/* <ProductCard/> */}

      {/* <ListaDeTenis limit={8} /> */}

    </>
  )
}

export default App
