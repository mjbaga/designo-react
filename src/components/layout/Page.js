
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import styles from './Page.module.scss';
import { splitClasses } from 'utils/CustomFunctions';

const Page = ({ classes, leafClass, children }) => {
  const leafClassArr = splitClasses(leafClass, styles);

  return (
    <div className={`${styles.page} ${leafClassArr.length ? leafClassArr.join(' ') : ''}`}>
      <Header />
      <main className={`main ${classes ? classes : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page;