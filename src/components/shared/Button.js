import { Link } from 'react-router-dom';
import ConditionalWrapper from 'utils/ConditionalWrapper';
import styles from './Button.module.scss';

const Button = ({ link, classes, children }) => {
  const splitClass = classes ? classes.split(' ') : '';
  let classString = [];

  if(splitClass.length) {
    splitClass.forEach((className) => {
      return classString.push(styles[className]);
    });
  }
  

  return (
    <ConditionalWrapper
      condition={link !== '' || link !== undefined}
      wrapperTrue={children => 
        <Link 
          to={link} 
          className={`${styles['btn']} ${splitClass.length ? classString.join() : ''}`}
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