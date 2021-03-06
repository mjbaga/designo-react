import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import styles from './Page.module.scss';
import { splitClasses } from 'utils/CustomFunctions';

const Page = ({ classes, leafClass, children, title = "Designo" }) => {
  const leafClassArr = splitClasses(leafClass, styles);
  document.title = title;

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