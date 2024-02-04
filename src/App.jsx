import React, { useState } from 'react';
import './App.css';
import Busqueda from './components/Buscador';
import MiApi from './components/MiApi';

function App() {
  const [filtro, setFiltro] = useState('');

  return (
    <>
      <img className='img-css' src="https://logos-world.net/wp-content/uploads/2023/02/The-Simpsons-Emblem.png" />
      <Busqueda setFiltro={setFiltro} />
      <MiApi filtro={filtro} />
    </>
  );
}

export default App;
