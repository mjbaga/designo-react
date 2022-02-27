
import styles from './LinkCard.module.scss';
import { Link } from 'react-router-dom';

const LinkCard = ({ item }) => {
  const { link, title, image, desc } = item;

  return (
    <Link to={link} className={styles["link-card"]}>
      <img src={image} alt={title} />
      <label className={styles.text}>
        <h3 className={styles["link-title"]}>{title}</h3>
        <p>{desc}</p>
      </label>
    </Link>
  )
}

export default LinkCard;