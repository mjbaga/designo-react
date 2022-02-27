import ImageLink from './ImageLink';
import styles from './ImageLinkGroup.module.scss';

const ImageLinkGroup = ({items}) => {

  return (
    <div className={styles["image-link-group"]}>
      {items.map((item, i) => {
        return <ImageLink key={i} link={item.link} title={item.title} images={item.images} />
      })}
    </div>
  )
}

export default ImageLinkGroup;