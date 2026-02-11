import React, { useState } from 'react';

const FormularioProduto = ({ aoAdicionar }) => {
    // Gerenciamento de estado do formulário 
    const [formData, setFormData] = useState({
        nome: '',
        preco: '',
        descricao: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nome || !formData.preco) return;

        aoAdicionar(formData); // Envia os dados para o componente pai
        setFormData({ nome: '', preco: '', descricao: '' }); // Limpa o form
    };

    return (
        <form onSubmit={handleSubmit} className="form-cadastro">
            <h2>Cadastrar novo produto</h2>
            <input
                type="text"
                placeholder="Nome do produto"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
            <input
                type="number"
                placeholder="Preço"
                value={formData.preco}
                onChange={(e) => setFormData({ ...formData, preco: e.target.value })}
            />
            <textarea
                placeholder="Descrição"
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
            />
            <button type="submit">Adicionar ao catálogo</button>
        </form>
    );
};

export default FormularioProduto;