import PatternBox from "components/layout/PatternBox";
import Button from "components/common/Button";
import styles from "./CallToActionBox.module.scss";

const CallToActionBox = ({ title, text, link, linkText }) => {

  return (
    <PatternBox type="bg-pattern-cta" classes={`${styles["cta-box"]} flow`}>
      <h2 className="section-heading">{title}</h2>
      <p>{text}</p>
      <Button link={link} classes="btn-light">{linkText}</Button>
    </PatternBox>
  )
}

export default CallToActionBox;