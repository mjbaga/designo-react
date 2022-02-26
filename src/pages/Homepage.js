import HeroBox from 'components/common/HeroBox';
import ImageLinkGroup from 'components/common/ImageLinkGroup';
import Page from 'components/layout/Page';
import styles from './Homepage.module.scss';

const Homepage = () => {

  return (
    <Page classes={`${styles.homepage} flow`}>
      
      <section>
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
      </section>
      <section>
        <div className="container">
          <ImageLinkGroup
            items={[
              {
                images: {
                  mobile: require("assets/images/home/mobile/image-web-design.jpg"),
                  tablet: require("assets/images/home/tablet/image-web-design.jpg"),
                  desktop: require("assets/images/home/desktop/image-web-design-large.jpg")
                },
                title: "Web Design",
                link: "/web-design"
              },
              {
                images: {
                  mobile: require("assets/images/home/mobile/image-app-design.jpg"),
                  tablet: require("assets/images/home/tablet/image-app-design.jpg"),
                  desktop: require("assets/images/home/desktop/image-app-design.jpg")
                },
                title: "App Design",
                link: "/app-design"
              },
              {
                images: {
                  mobile: require("assets/images/home/mobile/image-graphic-design.jpg"),
                  tablet: require("assets/images/home/tablet/image-graphic-design.jpg"),
                  desktop: require("assets/images/home/desktop/image-graphic-design.jpg")
                },
                title: "Graphic Design",
                link: "/graphic-design"
              },
            ]}
          />
        </div>
      </section>
      
    </Page>

    
  )
}

export default Homepage;