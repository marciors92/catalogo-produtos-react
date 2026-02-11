import React from 'react';

// Componentes e Props 
const ProdutoCard = ({ nome, preco, descricao, imagem }) => {
    return (
        <div className="card">
            <img src={imagem || 'https://via.placeholder.com/150'} alt={nome} />
            <h3>{nome}</h3>
            {/* Formatação simples de preço */}
            <p className="preco">R$ {parseFloat(preco).toFixed(2)}</p>
            <p>{descricao}</p>
        </div>
    );
};

export default ProdutoCard;