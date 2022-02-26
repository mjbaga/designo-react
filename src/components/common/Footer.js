import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={`${styles["footer-grid"]} flow`}>
          <div className={styles["footer-top"]}>
            <Link to="/" className="logo">
              <span className="sr-only">Link to home</span>
              <img src={require('assets/images/shared/desktop/logo-light.png')} alt="Designo Logo" />
            </Link>
            <nav className={styles["footer-nav"]}>
              <ul className={styles["footer-menu"]}>
                <li>
                  <Link to="/company">Our Company</Link>
                </li>
                <li>
                  <Link to="/locations">Locations</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.addresses}>
            <div className={styles.address}>
              <p className="bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className={styles.address}>
              <p className="bold">Contact Us (Central Office)</p>
              <p>P : <a href="tel:+1 253-863-8967">+1 253-863-8967</a></p>
              <p>M : <a href="to:contact@designo.co">contact@designo.co</a></p>
            </div>
          </div>
          <nav className={styles["social-nav"]}>
            <ul className={styles["social-menu"]}>
              <li><Link to="/company"><span className="sr-only">Facebook</span><i className="icon icon-facebook"></i></Link></li>
              <li><Link to="/company"><span className="sr-only">YouTube</span><i className="icon icon-youtube"></i></Link></li>
              <li><Link to="/company"><span className="sr-only">Twitter</span><i className="icon icon-twitter"></i></Link></li>
              <li><Link to="/company"><span className="sr-only">Pinterest</span><i className="icon icon-pinterest"></i></Link></li>
              <li><Link to="/company"><span className="sr-only">Instagram</span><i className="icon icon-instagram"></i></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;