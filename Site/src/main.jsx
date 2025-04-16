import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './assets/css-react-tcc/tcc.css';
import App from './App.jsx';
import PagHom from './Components/PagHom.jsx';
import PagSobr from './Components/PagSobr.jsx';
import PagDown from './Components/PagDown.jsx';
import DpsInstall from './Components/DpsInstall.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Home" element={<PagHom />} />
      <Route path="/Sobre-Nos" element={<PagSobr />} />
      <Route path="/Download" element={<PagDown />} />
      <Route path="/obrigado" element={<DpsInstall />} />
    </Routes>
  </BrowserRouter>
);