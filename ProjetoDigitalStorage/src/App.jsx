  import './App.css';

  import Footer from './Components/Footer';
  import Header from './Components/Header2';
  import MainContent from './Components/Main';
  import MainBottom from './Components/Main_bottom';
  import MainCards from './Components/MainCards';
  import MainCollection from './Components/MainCollection';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import TelaLogin from './Components/Login/';
  import TelaCadastro from './Components/Cadastro';

  function App() {




    const Cadastro = ()=>{

      return(
      <div>
      <Header/>
      <TelaCadastro/>
      <Footer/>
      </div>
      )
    }
    const Login = () => {
      return (
        <div>
          <Header />
          <TelaLogin />
          <Footer />
        </div>
      );
    };

    const Home = () => {
      return (
        <div>
          <Header />
          <MainContent />
          <MainCollection />
          <MainCards />
          <MainBottom />
          <Footer />
        </div>
      );
    };

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} /> 
        </Routes>
      </Router>
    );
  }

  export default App;
