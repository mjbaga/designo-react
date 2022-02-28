import PatternBox from "components/layout/PatternBox";

import styles from "./HeroBox.module.scss";

const HeroBox = ({ image, imageAlt, children }) => {

  return (
    <PatternBox type="bg-pattern-big-circle" classes={styles["hero-box"]}>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles["image-container"]}>
        <img src={image} alt={imageAlt} />
      </div>
    </PatternBox>
  )
}

export default HeroBox;