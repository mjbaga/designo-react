
import Header from 'components/common/Header';
import styles from './Page.module.scss';

const Page = ({ children }) => {

  return (
    <div className={styles.page}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Page;