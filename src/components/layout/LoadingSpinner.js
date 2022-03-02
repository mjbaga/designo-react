import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  document.body.classList.remove('menu-open');

  return (
    <div className={styles["spinner-container"]}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default LoadingSpinner;
