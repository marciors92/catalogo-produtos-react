import React, { useState } from 'react';

const FormularioProduto = ({ aoAdicionar }) => {
    const [formData, setFormData] = useState({ nome: '', preco: '', descricao: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nome || !formData.preco) return;
        aoAdicionar(formData);
        setFormData({ nome: '', preco: '', descricao: '' });
    };

    return (
        <section className="form-section">
            <form onSubmit={handleSubmit} className="form-cadastro">
                <h2>Cadastrar novo produto</h2>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Nome do produto"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Preço"
                        value={formData.preco}
                        onChange={(e) => setFormData({ ...formData, preco: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Descrição"
                        value={formData.descricao}
                        onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                        rows="3"
                    />
                </div>
                <button type="submit" className="btn-adicionar">Adicionar ao catálogo</button>
            </form>
        </section>
    );
};

export default FormularioProduto;