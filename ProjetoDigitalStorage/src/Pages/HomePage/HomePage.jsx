//../../Pages/HomePage
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import MainContent from '../../Components/Main';
import MainBottom from '../../Components/Main_bottom';
import MainCards from '../../Components/MainCards';
import Carrossel from '../../Components/Carrossel';

const HomePage = () => {
  return (
    <>
      <Header />
      <Carrossel />
      <MainContent />
      <MainCards />
      <MainBottom />
      <Footer />
    </>
  );
};

export default HomePage;



