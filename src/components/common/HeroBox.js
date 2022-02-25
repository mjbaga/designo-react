import PatternBox from "components/layout/PatternBox";
import Button from "components/common/Button";

import styles from "./HeroBox.module.scss";

const HeroBox = ({ title, image, imageMobile, text, link, btnText, heading=false }) => {

  const headingMarkup = heading ? <h1>{title}</h1> : <h2 className="section-heading">{title}</h2>

  return (
    <PatternBox type="bg-pattern-big-circle" classes={styles["hero-box"]}>
      {headingMarkup}
      <div className={styles.desc} dangerouslySetInnerHTML={{ __html: text }}></div>
      <Button link={link} classes="btn-light">
        {btnText}
      </Button>
      <div className={styles["image-container"]}>
        <img src={image} alt={title} />
      </div>
    </PatternBox>
  )
}

export default HeroBox;