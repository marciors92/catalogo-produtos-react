// App.jsx
import React from 'react'; // Importe React para usar hooks como useState e useEffect
import ProdutoCard from './components/ProdutoCard'; // Importe o componente ProdutoCard

// Este é o componente principal da aplicação, onde toda a lógica central e gerenciamento de estado acontecem.
function App() {
    // 1. Gerenciamento de Estado com useState:
    // 'produtos' armazena a lista de produtos a serem exibidos. 'setProdutos' é a função para atualizar esse estado.
    const [produtos, setProdutos] = React.useState([]);
    // 'carregando' indica se os dados estão sendo carregados (simulando uma requisição de API).
    const [carregando, setCarregando] = React.useState(true);
    // 'novoProdutoNome', 'novoProdutoPreco', 'novoProdutoDescricao' são estados para controlar os campos do formulário.
    // O valor de cada input do formulário é 'controlado' por seu respectivo estado.
    const [novoProdutoNome, setNovoProdutoNome] = React.useState('');
    const [novoProdutoPreco, setNovoProdutoPreco] = React.useState('');
    const [novoProdutoDescricao, setNovoProdutoDescricao] = React.useState('');

    // 2. Ciclo de Vida com useEffect (Simulação de API):
    // Este hook é executado após a primeira renderização do componente e sempre que suas dependências mudam.
    // Com um array de dependências vazio ([]), ele é executado apenas uma vez, simulando o 'componentDidMount'.
    React.useEffect(() => {
        // Inicia o estado de carregamento como true.
        setCarregando(true);
        // Simula uma chamada de API assíncrona usando setTimeout.
        setTimeout(() => {
            // Dados mockados que seriam normalmente recebidos de uma API real.
            const dadosMockados = [
                { id: '1', nome: 'iPhone 15 Pro', preco: 7999.00, imagem: '📱', descricao: 'O mais novo smartphone da Apple com câmera Pro.' },
                { id: '2', nome: 'PlayStation 5', preco: 4500.00, imagem: '🎮', descricao: 'Console de última geração da Sony para jogos incríveis.' },
                { id: '3', nome: 'Fone Bluetooth XM5', preco: 1800.00, imagem: '🎧', descricao: 'Fones de ouvido com cancelamento de ruído premium.' },
                { id: '4', nome: 'Smart TV 4K 65"', preco: 3200.00, imagem: '📺', descricao: 'Televisão inteligente 4K com tela grande para imersão total.' },
            ];
            // Atualiza o estado 'produtos' com os dados mockados. Isso causa uma nova renderização.
            setProdutos(dadosMockados);
            // Desativa o estado de carregamento. Isso também causa uma nova renderização, exibindo os produtos.
            setCarregando(false);
        }, 2000); // O atraso de 2 segundos simula o tempo de resposta de uma API.
    }, []); // O array vazio [] garante que esta função só seja executada uma vez após a montagem.

    // 3. Controle de Formulário e Função handleSubmit:
    // Esta função é chamada quando o formulário de adição de produto é enviado.
    const handleSubmit = (evento) => {
        // Previne o comportamento padrão do formulário de recarregar a página.
        evento.preventDefault();

        // Validação do campo de preço: Garante que o preço é um número válido e positivo.
        const precoNumerico = parseFloat(novoProdutoPreco);
        if (isNaN(precoNumerico) || precoNumerico <= 0) {
            // Em um ambiente de produção, use um modal ou mensagem na UI ao invés de alert.
            alert('Por favor, insira um preço válido e positivo.');
            return; // Interrompe a execução se a validação falhar.
        }

        // Cria um ID único para o novo produto.
        // Se já houver produtos, pega o maior ID existente e incrementa; caso contrário, começa com '1'.
        const novoId = (produtos.length > 0 ? Math.max(...produtos.map(p => parseInt(p.id))) + 1 : 1).toString();
        // Cria um novo objeto de produto com os dados do formulário.
        const produtoNovo = {
            id: novoId,
            nome: novoProdutoNome,
            preco: precoNumerico,
            imagem: '📦', // Emoji padrão para novos produtos.
            descricao: novoProdutoDescricao,
        };

        // Atualiza o estado 'produtos':
        // Usa o spread operator (...) para criar uma nova array que inclui todos os produtos existentes
        // e o 'produtoNovo'. Isso garante a imutabilidade do estado, um princípio chave do React.
        setProdutos([...produtos, produtoNovo]);

        // Limpa os campos do formulário após o envio, resetando os estados controlados.
        setNovoProdutoNome('');
        setNovoProdutoPreco('');
        setNovoProdutoDescricao('');
    };

    // 4. Renderização do Componente Principal (JSX):
    // Define a estrutura visual da aplicação.
    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 mt-4">Catálogo de Produtos</h1>

            {/* Formulário de Cadastro de Produto */}
            <div className="bg-white rounded-lg shadow-xl p-6 mb-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Adicionar Novo Produto</h2>
                {/* O evento onSubmit está ligado à função handleSubmit para processar o envio. */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome do Produto</label>
                        {/* Input 'controlado': 'value' é ligado ao estado e 'onChange' atualiza o estado. */}
                        <input
                            type="text"
                            id="nome"
                            value={novoProdutoNome}
                            onChange={(e) => setNovoProdutoNome(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="preco" className="block text-sm font-medium text-gray-700">Preço</label>
                        <input
                            type="number"
                            id="preco"
                            value={novoProdutoPreco}
                            onChange={(e) => setNovoProdutoPreco(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição</label>
                        <textarea
                            id="descricao"
                            value={novoProdutoDescricao}
                            onChange={(e) => setNovoProdutoDescricao(e.target.value)}
                            rows="3"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Adicionar Produto
                    </button>
                </form>
            </div>

            {/* Exibição da Lista de Produtos */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossos Produtos</h2>
            {/* Renderização Condicional: Mostra 'Carregando...' se 'carregando' for true. */}
            {carregando ? (
                <p className="text-lg text-gray-600">Carregando produtos...</p>
            ) : (
                // Se não estiver carregando, exibe a lista de produtos.
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                    {/* Itera sobre a array 'produtos' (do estado) usando .map(). */}
                    {/* Para cada 'produto' na array, um componente 'ProdutoCard' é renderizado. */}
                    {/* A 'key' é essencial para o React otimizar a renderização de listas. */}
                    {/* O objeto 'produto' completo é passado como uma prop para o ProdutoCard. */}
                    {produtos.map(produto => (
                        <ProdutoCard key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App; // Exporte o componente principal