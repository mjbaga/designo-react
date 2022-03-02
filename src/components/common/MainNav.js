import { NavLink } from 'react-router-dom';
import styles from './MainNav.module.scss';
import { Fragment, useState } from 'react';

const MainNav = (props) => {
  const { navItems, id } = props;
  const [menuIsActive, setMenuIsActive] = useState(false);

  const menuClickHandler = (e) => {
    setMenuIsActive(!menuIsActive);
  }

  menuIsActive ? document.body.classList.add('menu-open') : document.body.classList.remove('menu-open');

  return (
    <Fragment>
      <button 
        onClick={menuClickHandler} 
        className={styles["mobile-nav-toggle"]} 
        aria-controls={id}
        aria-expanded={menuIsActive ? 'true' : 'false'}
      >
        <span className="sr-only">Menu</span>
      </button>
      <nav role="navigation" className={`${styles['main-nav']} ${menuIsActive ? styles['active'] : '' }`}>
        <ul 
          id={id} 
          className="flex"
        >
          {navItems.map((item, i)=> (
            <li className={`${styles['nav-item']}`} key={i}>
              <NavLink to={item.link}>
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  )
}

export default MainNav;