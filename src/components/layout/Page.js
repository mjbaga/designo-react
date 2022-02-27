
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import styles from './Page.module.scss';

const Page = ({ classes, leaf2, children }) => {

  return (
    <div className={`${styles.page} ${leaf2 ? styles["leaf-2"] : ''}`}>
      <Header />
      <main className={`main ${classes ? classes : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page;