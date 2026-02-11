import React, { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard';
import FormularioProduto from './components/FormularioProduto';
import './App.css';

function App() {
  // Gerenciamento de estado
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simulação de carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      const dadosMockados = [
        { id: 1, nome: "Teclado Mecânico", preco: 250.00, descricao: "Switch Blue, RGB" },
        { id: 2, nome: "Headset ANC", preco: 450.00, descricao: "Cancelamento de ruído ativo e Bluetooth" },
        { id: 3, nome: "Monitor Extra", preco: 1200.00, descricao: "27 polegadas, 144Hz, Painel IPS" }
      ];
      setProdutos(dadosMockados);
      setCarregando(false);
    }, 2000); // Simula atraso de rede

    return () => clearTimeout(timer); // Limpeza do ciclo de vida
  }, []);

  // Adição dinâmica ao estado
  const adicionarProduto = (novoProduto) => {
    const produtoComId = { ...novoProduto, id: Date.now() };
    setProdutos([...produtos, produtoComId]);
  };

  return (
    <div className="container">
      {/* Cabeçalho isolado para garantir centralização independente */}
      <header>
        <h1>Mercado Tech</h1>
      </header>

      {/* Formulário de Cadastro (Interface Interativa) */}
      <FormularioProduto aoAdicionar={adicionarProduto} />

      <hr />

      {/* Controle de Fluxo */}
      {carregando ? (
        <p className="loading">Carregando produtos...</p>
      ) : (
        <div className="vitrine">
          {/* Renderização Dinâmica com Map */}
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