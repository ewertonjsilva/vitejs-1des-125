import styles from './index.module.css';

function Botao({ texto, aoClicar }) {
    return (
        <button
            className={styles.botao}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;