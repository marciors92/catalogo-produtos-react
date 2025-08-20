// components/ProdutoCard.jsx
import React from 'react'; // Importe React para usar JSX

// Este é um componente funcional React, responsável por exibir individualmente um produto.
// Ele recebe um objeto 'produto' via props.
function ProdutoCard({ produto }) {
    // A renderização do componente é feita usando JSX, que se parece com HTML, mas permite lógica JavaScript.
    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 w-full md:w-80 flex flex-col items-center text-center">
            {/* Exibe o emoji do produto (passado via prop) */}
            <div className="text-6xl mb-4">{produto.imagem}</div>
            {/* Idem */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{produto.nome}</h3>
            {/* Idem */}
            <p className="text-xl font-bold text-indigo-600 mb-2">R$ {produto.preco.toFixed(2)}</p>
            {/* Idem */}
            <p className="text-gray-600 text-sm">{produto.descricao}</p>
        </div>
    );
}

export default ProdutoCard; // Exporte o componente para ser importado em outros lugares