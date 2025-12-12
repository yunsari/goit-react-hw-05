import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.main}>
      <div className={styles.fof}>
        <p>404</p>
        <h1>Sayfa Bulunamadı!</h1>
      </div>
    </div>
  );
}

export default NotFound;
