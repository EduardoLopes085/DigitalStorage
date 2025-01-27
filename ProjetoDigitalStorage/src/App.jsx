import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Products from './Pages/ProductsPage/ProductPage';
import './App.css';
import ProductBuyPage from './Pages/ProductBuy';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="/products" element={<Products/>} />  
        <Route path='/sneaker' element = {<ProductBuyPage/>} />       
      </Routes>
    </Router>

    
  
  );
}

export default App;