import React from 'react';

const ProdutoCard = ({ nome, preco, descricao, imagem }) => {
    return (
        <article className="card">
            <div className="card-image-container">
                <img src={imagem || 'https://via.placeholder.com/300x200'} alt={nome} />
            </div>
            <div className="card-content">
                <h3>{nome}</h3>
                <p className="preco">R$ {parseFloat(preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <p className="descricao">{descricao}</p>
            </div>
        </article>
    );
};

export default ProdutoCard;