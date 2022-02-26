
import styles from './ImageLink.module.scss';
import { Link } from 'react-router-dom';

const ImageLink = ({ link, title, images }) => {

  return (
    <Link to={link} className={styles["image-link"]}>
      <picture>
        <source srcSet={images.desktop} media="(min-width: 992px)" />
        <source srcSet={images.tablet} media="(min-width: 576px)" />
        <source srcSet={images.mobile} media="(min-width: 360px)" />
        <source srcSet={images.mobile} media="(min-width: 0px)" />
        
        <img src={images.mobile} alt={title} /> 
      </picture>
      <label className={styles.text}>
        <p className={styles["link-title"]}>{title}</p>
        <p className={styles.subtext}>View Projects</p>
      </label>
    </Link>
  )
}

export default ImageLink;