import styles from './InfoCardGroup.module.scss';

const InfoCardGroup = ({ items }) => {

  return (
    <div className={styles["info-card-group"]}>
      {items.map((item, i) => (
        <div className={styles["info-card"]} key={i}>
          <div className={styles["image-container"]}>
            <img src={item.image} alt={item.title} />
          </div>
          <p className={styles["info-title"]}>{item.title}</p>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoCardGroup;