
import Header from 'components/common/Header';
import styles from './Page.module.scss';

const Page = ({ classes, children }) => {

  return (
    <div className={styles.page}>
      <Header />
      <main className={`main ${classes ? classes : ''}`}>
        {children}
      </main>
    </div>
  )
}

export default Page;