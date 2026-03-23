import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {

    let style = [styles.botao];
    
    if (texto == 'Cadastrar') style.push(styles.cadastro);
    console.log(style);
    
    return (
        <button
            className={style}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;