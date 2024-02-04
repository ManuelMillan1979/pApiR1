import React, { useState } from 'react';

const Buscador = ({ setFiltro, setOrden }) => {
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const inputLook = (e) => {
    const buscarContenido = e.target.value;
    setFiltro(buscarContenido);
  };

  const cambiarOrden = () => {
    setOrdenAscendente(!ordenAscendente);
    setOrden(ordenAscendente ? 'descendente' : 'ascendente');
  };

  return (
    <div className="buscador col col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Buscar personaje"
        className="form-control mb-3 buscador-css"
        onChange={inputLook}
      />
      <button className="btn btn-primary" onClick={cambiarOrden}>
        {ordenAscendente ? 'Ordenar Z-A' : 'Ordenar A-Z'}
      </button>
    </div>
  );
};

export default Buscador;
