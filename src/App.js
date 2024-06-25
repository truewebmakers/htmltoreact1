 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Layout from './pages/Layout';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Index />}></Route>
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
