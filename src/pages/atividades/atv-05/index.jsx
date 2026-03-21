import { useState, useEffect } from 'react';

export default function Atividade03() {
    const [lista, setLista] = useState([]);
    const [editingId, setEditingId] = useState(null); // Estado para controlar edição

    const initialForm = {
        nome: '', email: '', nascimento: '', idade: 0,
        corFavorita: '#4f46e5', categoria: '', genero: 'M',
        ativo: true, bio: '', avatar: 'https://i.pravatar.cc/150'
    };

    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        // Simulação de leitura de API JSON
        const dados = [
            { id: 1, nome: 'Ewerton Prof', email: 'ewerton@etec.sp.gov.br', categoria: 'Admin', avatar: 'https://i.pravatar.cc/150?u=1' }
        ];
        setLista(dados);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
    };

    // --- FUNÇÕES DO CRUD ---

    const handleSalvar = (e) => {
        e.preventDefault();

        if (editingId) {
            // UPDATE: Mapeia a lista e substitui o item com o ID correspondente
            const listaAtualizada = lista.map(item =>
                item.id === editingId ? { ...form, id: editingId } : item
            );
            setLista(listaAtualizada);
            setEditingId(null);
        } else {
            // CREATE: Adiciona novo item com ID único
            setLista([...lista, { ...form, id: Date.now() }]);
        }

        setForm(initialForm); // Limpa o formulário
    };

    const handleEdit = (item) => {
        setEditingId(item.id);
        setForm(item); // Preenche o formulário com os dados do item
        window.scrollTo(0, 0); // Sobe a página para o formulário
    };

    const handleDelete = (id) => {
        if (window.confirm("Deseja realmente excluir este registro?")) {
            // DELETE: Filtra a lista removendo o ID selecionado
            setLista(lista.filter(item => item.id !== id));
        }
    };

    const cancelarEdicao = () => {
        setEditingId(null);
        setForm(initialForm);
    };

    return (
        <div className="container">
            <h1 style={{ color: editingId ? '#f59e0b' : '#4f46e5' }}>
                {editingId ? '📝 Editando Usuário' : '➕ Cadastrar Usuário'}
            </h1>

            <form onSubmit={handleSalvar} className={editingId ? 'editing-mode' : ''}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <section>
                        <label>Nome</label>
                        <input type="text" name="nome" value={form.nome} onChange={handleChange} required />

                        <label>E-mail</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} />

                        <label>Idade</label>
                        <input type="number" name="idade" value={form.idade} onChange={handleChange} />
                    </section>

                    <section>
                        <label>Nível</label>
                        <select name="categoria" value={form.categoria} onChange={handleChange}>
                            <option value="">Selecione...</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>

                        <label>Gênero</label>
                        <div className="inline-group">
                            <input type="radio" name="genero" value="M" checked={form.genero === 'M'} onChange={handleChange} /> M
                            <input type="radio" name="genero" value="F" checked={form.genero === 'F'} onChange={handleChange} /> F
                        </div>

                        <div className="inline-group">
                            <input type="checkbox" name="ativo" checked={form.ativo} onChange={handleChange} />
                            <label>Ativo</label>
                        </div>
                    </section>
                </div>

                <button type="submit">{editingId ? 'Atualizar Dados' : 'Salvar Novo'}</button>
                {editingId && <button type="button" className="btn-cancel" onClick={cancelarEdicao}>Cancelar</button>}
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.avatar} alt="User" width="40" /></td>
                            <td>{item.nome} <br /> <small>{item.email}</small></td>
                            <td>
                                <button className="btn-edit" onClick={() => handleEdit(item)}>Editar</button>
                                <button className="btn-delete" onClick={() => handleDelete(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}