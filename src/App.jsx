import React, { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard';
import FormularioProduto from './components/FormularioProduto';
import './App.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simulação de API com useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      const dadosMockados = [
        { id: 1, nome: "Teclado Mecânico", preco: 250.00, descricao: "Switch Blue, RGB" },
        { id: 2, nome: "Mouse Gamer", preco: 150.00, descricao: "12000 DPI, Lateral emborrachada" }
      ];
      setProdutos(dadosMockados);
      setCarregando(false);
    }, 2000); // 2 segundos de loading simulado

    return () => clearTimeout(timer); // Limpeza do ciclo de vida
  }, []);

  const adicionarProduto = (novoProduto) => {
    const produtoComId = { ...novoProduto, id: Date.now() };
    setProdutos([...produtos, produtoComId]);
  };

  return (
    <div className="container">
      <h1>Catálogo de Engenharia Front-End</h1>

      <FormularioProduto aoAdicionar={adicionarProduto} />

      <hr />

      {carregando ? (
        <p className="loading">Carregando produtos...</p>
      ) : (
        <div className="vitrine">
          {/* Renderização dinâmica com .map()  */}
          {produtos.map(prod => (
            <ProdutoCard
              key={prod.id}
              nome={prod.nome}
              preco={prod.preco}
              descricao={prod.descricao}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;