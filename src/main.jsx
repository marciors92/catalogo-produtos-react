import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa o componente App
import './index.css'; // Mantenha se quiser usar um arquivo CSS global para Tailwind ou outros estilos

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);