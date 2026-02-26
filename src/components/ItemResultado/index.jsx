import styles from "./styles.module.css";

export default function ItemResultado({ icone, nome, valor, tipo }) {
  return (
    <div className={`${styles.item} ${styles[tipo]}`}>
      <div className={styles.itemEsquerda}>
        {icone}
        <span>{nome}</span>
      </div>
      <strong className={styles.valor}>{valor}</strong>
    </div>
  );
}