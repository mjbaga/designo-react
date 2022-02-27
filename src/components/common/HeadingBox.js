import PatternBox from "components/layout/PatternBox";
import styles from './HeadingBox.module.scss';

const HeadingBox = ({ title, heading=true, text }) => {
  
  const headingMarkup = heading ? <h1>{title}</h1> : <h2 className="section-heading">{title}</h2>;

  return (
    <PatternBox type="bg-pattern-intro-web" classes={`${styles["heading-box"]} flow`}>
      {headingMarkup}
      <div className={styles.desc} dangerouslySetInnerHTML={{ __html: text }}></div>
    </PatternBox>
  )
}

export default HeadingBox;