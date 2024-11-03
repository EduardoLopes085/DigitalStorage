import './App.css'
// import Carrossel from './Components/Carrossel'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MainContent from './Components/Main'
import MainBottom from './Components/Main_bottom'
import MainCards from './Components/MainCards'

function App() {
  

  return (
    <>
      <Header/>

      {/* <Carrossel/> */}

      <MainContent/> 
      
      <MainCards/>

      <MainBottom/>

      <Footer/>

      

      {/* <ListaDeTenis limit={8} /> */}

    </>
  )
}

export default App
