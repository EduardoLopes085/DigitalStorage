import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Produto from './Pages/ProductPage/ProductPage';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/produtos" element={<Produto/>} />            
      </Routes>
    </Router>
    
  
  );
}

export default App;