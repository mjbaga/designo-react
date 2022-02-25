import styles from './PatternBox.module.scss';

const PatternBox = ({ type, classes, children}) => {
  return (
    <div className={`${styles["pattern-box"]} ${ classes ? classes : '' } bg-pattern ${type}`}>
      {children}
    </div>
  )
}

export default PatternBox;