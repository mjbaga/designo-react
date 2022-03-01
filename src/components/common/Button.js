import { Link } from 'react-router-dom';
import ConditionalWrapper from 'utils/ConditionalWrapper';
import styles from './Button.module.scss';
import { splitClasses } from 'utils/CustomFunctions';

const Button = ({ link, classes, children, type='anchor', disabled=false }) => {
  const splitClass = splitClasses(classes, styles);

  return (
    <ConditionalWrapper
      condition={type === 'anchor'}
      wrapperTrue={children => 
        <Link 
          to={link} 
          className={`${styles['btn']} ${splitClass.length ? splitClass.join(' ') : ''}`}
        >
          {children}
        </Link>}
      wrapperFalse={children => 
        <button className={`${styles['btn']} ${splitClass.length ? splitClass.join(' ') : ''}`} disabled={disabled}>{children}</button>}
    >
      {children}
    </ConditionalWrapper>
  )
  
}

export default Button;