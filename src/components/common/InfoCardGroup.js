import InfoCard from 'components/common/InfoCard';
import styles from './InfoCardGroup.module.scss';

const InfoCardGroup = ({ items }) => {

  return (
    <div className={styles["info-card-group"]}>
      {items.map((item, i) => (<InfoCard key={i} item={item} />))}
    </div>
  )
}

export default InfoCardGroup;