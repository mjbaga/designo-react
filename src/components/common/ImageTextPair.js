
import styles from './ImageTextPair.module.scss';

/**
 * Wrapper component for Image Cards
 * @param {imageSet} - responsive image set
 * @param {alt} - image alt
 * @param {type} - light or dark
 * @param {direction} - image-right or blank
 */
const ImageTextPair = ({ imageSet, alt, type="dark", order="text", children }) => {

  return (
    <div className={`${styles["image-card-wrap"]} ${styles[type]} ${order === 'text' ? styles["text-first"] : ''}`}>
      <picture>
        <source srcSet={imageSet.desktop} media="(min-width: 992px)" />
        <source srcSet={imageSet.tablet} media="(min-width: 576px)" />
        <source srcSet={imageSet.mobile} media="(min-width: 360px)" />
        <source srcSet={imageSet.mobile} media="(min-width: 0px)" />
        <img src={imageSet.mobile} alt={alt} /> 
      </picture>
      <div className={`${styles.text} flow`}>
        {children}
      </div>
    </div>
  )
}

export default ImageTextPair;