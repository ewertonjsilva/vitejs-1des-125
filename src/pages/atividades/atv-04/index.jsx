import { useState, useEffect } from 'react';
import styles from './index.module.css';

export default function Atividade04() {

  const [inputValue, setInputValue] = useState({ quantidade: '', produto: '' });
  const [dadosCadastrados, setDadosCadastrados] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [tema, setTema] = useState('light');

  // useEffect(() => {
  //     // Aplica o atributo no HTML para o CSS ler
  //     document.documentElement.setAttribute('data-theme', tema);
  // }, [tema]);

  const toggleTema = () => {
    setTema(tema === 'light' ? 'dark' : 'light');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.produto || !inputValue.quantidade) return;

    if (editandoId) {
      setDadosCadastrados(dadosCadastrados.map(item =>
        item.id === editandoId ? { ...item, ...inputValue } : item
      ));
      setEditandoId(null);
    } else {
      setDadosCadastrados([...dadosCadastrados, { ...inputValue, id: Date.now() }]);
    }
    setInputValue({ quantidade: '', produto: '' });
  };

  const handleRemoveItem = (id) => {
    setDadosCadastrados(dadosCadastrados.filter(item => item.id !== id));
  };

  const handleEditItem = (item) => {
    setInputValue({ quantidade: item.quantidade, produto: item.produto });
    setEditandoId(item.id);
  };

  return (
    <div className={styles.container} data-theme={tema}>
      <header className={styles.header}>
        <h1 className={styles.titulo}>Atividade 4 - Lista de compra</h1>
        <button onClick={toggleTema} className={styles.btnTema}>
          {tema === 'light' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
        </button>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="number"
          value={inputValue.quantidade}
          onChange={(e) => setInputValue({ ...inputValue, quantidade: e.target.value })}
          placeholder="Qtd"
        />
        <input
          className={styles.input}
          type="text"
          value={inputValue.produto}
          onChange={(e) => setInputValue({ ...inputValue, produto: e.target.value })}
          placeholder="Produto..."
        />
        <button type="submit" className={styles.btnPrincipal}>
          {editandoId ? 'Salvar' : 'Adicionar'}
        </button>
      </form>

      <ul className={styles.lista}>
        {dadosCadastrados.map((item) => (
          <li key={item.id} className={styles.linha}>
            <span className={styles.conteudo}>{item.quantidade}x {item.produto}</span>
            <div className={styles.acoes}>
              <button onClick={() => handleEditItem(item)}>Editar</button>
              <button onClick={() => handleRemoveItem(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}