import MainCards from '../../Components/MainCards';
import Header from '../../Components/Header/index';
import Carrossel from '../../Components/Carrossel/index';
import Promotionalcard from '../../Components/PromotionalCards/index';
import HomeSneaker from '../../Components/HomeSneaker/index';
import Footer from '../../Components/Footer/index'

const HomePage = () => {
  return (
    <>
      <Header/>
      <Carrossel/>
      <Promotionalcard/>
      <MainCards />
      <HomeSneaker/>
      <Footer/>

    </>
  );
};

export default HomePage;



