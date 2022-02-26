
import styles from './InfoCard.module.scss';

const InfoCard = ({ item }) => {
  const { title, desc, image } = item;

  return (
    <div className={styles["info-card"]}>
      <div className={styles["image-container"]}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )

}

export default InfoCard;