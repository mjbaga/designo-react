import { Link } from 'react-router-dom';
import ConditionalWrapper from 'utils/ConditionalWrapper';
import styles from './Button.module.scss';
import { splitClasses } from 'utils/CustomFunctions';

const Button = ({ link, classes, children }) => {
  const splitClass = splitClasses(classes, styles);

  return (
    <ConditionalWrapper
      condition={link !== '' || link !== undefined}
      wrapperTrue={children => 
        <Link 
          to={link} 
          className={`${styles['btn']} ${splitClass.length ? splitClass.join(' ') : ''}`}
        >
          {children}
        </Link>}
      wrapperFalse={children => 
        <button className={classes}>{children}</button>}
    >
      {children}
    </ConditionalWrapper>
  )
  
}

export default Button;