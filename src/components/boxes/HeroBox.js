import PatternBox from "components/layout/PatternBox";

import styles from "./HeroBox.module.scss";

/**
 * Wrapper component for Image Cards
 * @param {image} - image src
 * @param {imageAlt} - image alt
 */
const HeroBox = ({ image, alt, children }) => {

  return (
    <PatternBox type="bg-pattern-big-circle" classes={styles["hero-box"]}>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles["image-container"]}>
        <img src={image} alt={alt} />
      </div>
    </PatternBox>
  )
}

export default HeroBox;