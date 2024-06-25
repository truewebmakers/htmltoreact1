 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Layout from './pages/Layout';

function App() {
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
