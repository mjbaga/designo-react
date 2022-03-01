import LinkCard from './LinkCard';
import styles from './LinkCardGroup.module.scss';

const LinkCardGroup = ({ items }) => {

  return (
    <div className={styles["link-card-group"]}>
      {items.map((item, i) => (<LinkCard item={item} key={i} />))}
    </div>
  )
}

export default LinkCardGroup;