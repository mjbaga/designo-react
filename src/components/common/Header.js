import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import MainNav from 'components/common/MainNav';

const Header = () => {

  return (
    <header className={`${styles['header']} flex`}>
      <Link to="/" className="logo">
        <span className="sr-only">Link to home</span>
        <img src={require('assets/images/shared/desktop/logo-dark.png')} alt="Designo Logo" />
      </Link>
      <MainNav 
        navItems={[ 
          {
            link: '/our-company',
            text: 'Our Company'
          },
          {
            link: '/locations',
            text: 'Locations'
          },
          {
            link: '/contact',
            text: 'Contact'
          }
        ]} 

        id="primary-navigation"
      />
    </header>
  )
}

export default Header;