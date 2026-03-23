import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';


const acoes = ['Cancelar', 'Cadastrar', 'Editar', 'Listar', 'Excluir'];

function Atividade03() {
  // O hook useState gerencia o valor do contador
  const [acao, setAcao] = useState(0);

  return (
    <div className={styles.container}>
      <h1>Atividade 3</h1>
      <h2>Ação selecionada: {acoes[acao]}</h2>
      
      {/* Passando funções e textos via Props para o componente Botao */}
      <Botao texto={acoes[1]} aoClicar={() => setAcao(1)} />      
    </div>
  );
}

export default Atividade03;