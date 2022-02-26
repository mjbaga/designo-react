import HeroBox from 'components/common/HeroBox';
import ImageLinkGroup from 'components/common/ImageLinkGroup';
import InfoCardGroup from 'components/common/InfoCardGroup';
import Page from 'components/layout/Page';
import styles from './Homepage.module.scss';

import infoImage1 from 'assets/images/home/desktop/illustration-passionate.svg';
import infoImage2 from 'assets/images/home/desktop/illustration-resourceful.svg';
import infoImage3 from 'assets/images/home/desktop/illustration-friendly.svg';
import CallToActionBox from 'components/common/CallToActionBox';

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
      <section>
        <div className="container">
          <InfoCardGroup
            items={[
              {
                title: 'Passionate',
                desc: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
                image: infoImage1
              },
              {
                title: 'Resourceful',
                desc: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
                image: infoImage2
              },
              {
                title: 'Friendly',
                desc: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
                image: infoImage3
              },
            ]}
          />
        </div>
      </section>
      <section className="cta-box-bottom">
        <div className="container">
          <CallToActionBox
            title="Let’s talk about your project" 
            text="Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow." 
            link="/contact"
            linkText="Get in touch"
          />
        </div>
      </section>
    </Page>

    
  )
}

export default Homepage;