import HeroBox from 'components/common/HeroBox';
import Page from 'components/layout/Page';
import styles from './Homepage.module.scss';

const Homepage = () => {

  return (
    <Page classes={styles.homepage}>
      
      
      <div className="container mobile-no-pad">
        <HeroBox 
          heading="true"
          title="Award-winning custom designs and digital branding solutions" 
          text="<p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>"
          image={require("assets/images/home/desktop/image-hero-phone.png")}
          link="/web-design"
          btnText="Learn more"
        />
      </div>
    </Page>

    
  )
}

export default Homepage;