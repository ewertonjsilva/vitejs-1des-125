import { Link } from "react-router";

import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.containerLista}>
        <h1>Exemplos</h1>
        <Link to="/exemplo/1">Exemplo 1 - Componente básico</Link>
        <Link to="/exemplo/2">Exemplo 2 - Estilização com module</Link>
        <Link to="/exemplo/3">Exemplo 3 - State</Link>
        <Link to="/exemplo/4">Exemplo 4 - Componentes</Link>
        <Link to="/exemplo/98">Exemplo ? - Mockup</Link>
        <Link to="/exemplo/99">Exemplo ? - Mockup + Local Storage</Link>
      </div>
      <div className={styles.containerLista}>
        <h1>Atividades</h1>
        <Link to="/atividade/1">Atividade 1 - Componente básico</Link>
        <Link to="/atividade/2">Atividade 2 - Estilização básica</Link>
        <Link to="/atividade/3">Atividade 3 - Local Storage</Link>
      </div>
    </div>
  )
}

export default Home;