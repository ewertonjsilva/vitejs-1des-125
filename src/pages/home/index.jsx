
import styles from './index.module.css';

function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.containerLista}>
        <h1>Exemplos</h1>
      </div>
      <div className={styles.containerLista}>
        <h1>Atividades</h1>
      </div>
    </div>
  )
}

export default Home;