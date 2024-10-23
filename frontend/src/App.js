import React, { useState } from 'react';
import './index.css';

function App() {
  const [file, setFile] = useState(null);
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/upload_csv/', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setResultados(data.resultados);
      } else {
        setError('Ocorreu um erro ao processar o arquivo.');
      }
    } catch (error) {
      setError('Ocorreu um erro ao se conectar ao servidor.');
    }
  };

  return (
    <div className="container">
      <h1>Cálculo de Distâncias entre CEPs</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={handleFileChange} required />
        <button type="submit">Enviar</button>
      </form>

      {error && <p className="error">{error}</p>}

      <h2>Resultados</h2>
      <ul>
        {resultados.map((item, index) => (
          <li key={index}>
            {item.CEP_A} → {item.CEP_B}: {item.Distancia_km !== undefined ? `${item.Distancia_km.toFixed(2)} km` : item.Erro}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
