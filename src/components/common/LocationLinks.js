
import Button from "./Button";

import styles from './LocationLinks.module.scss';

const LocationLinks = ({ items }) => {

  return (
    <div className={styles["location-links"]}>
      {items.map((item, i) => (
        <div className={styles["loclink"]} key={i}>
          <div className={styles["image-container"]}>
            <img src={item.image} alt={item.location} />
          </div>
          <h3>{item.location}</h3>
          <Button link={item.link}>See location</Button>
        </div>
      ))}
    </div>
  )
}

export default LocationLinks;