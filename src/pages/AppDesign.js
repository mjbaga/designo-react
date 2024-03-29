import Page from 'components/layout/Page';
import ImageLinkGroup from 'components/cards/ImageLinkGroup';
import CallToActionBox from 'components/boxes/CallToActionBox';
import HeadingBox from 'components/boxes/HeadingBox';
import LinkCardGroup from 'components/cards/LinkCardGroup';

const AppDesign = () => {

  return (
    <Page classes="app-design flow" leafClass="leaf-top" title="App Design - Designo">
      <section>
        <div className="container mobile-no-pad">
          <HeadingBox
            type="bg-pattern-intro-app"
            title="App Design"
            text="<p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <LinkCardGroup
            items={[
              {
                title: "AirFilter",
                desc: "A multi-carrier shipping website for ecommerce businesses",
                image: require("assets/images/app-design/desktop/image-airfilter.jpg"),
                link: '/'
              },
              {
                title: "EyeCam",
                desc: "Site for low-cost money transfers and sending money within seconds",
                image: require("assets/images/app-design/desktop/image-eyecam.jpg"),
                link: '/'
              },
              {
                title: "FaceIt",
                desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
                image: require("assets/images/app-design/desktop/image-faceit.jpg"),
                link: '/'
              },
              {
                title: "Todo",
                desc: "Connects users with local contractors based on their location",
                image: require("assets/images/app-design/desktop/image-todo.jpg"),
                link: '/'
              },
              {
                title: "LoopStudios",
                desc: "Blogr is a platform for creating an online blog or publication",
                image: require("assets/images/app-design/desktop/image-loopstudios.jpg"),
                link: '/'
              },
            ]}
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
                },
                title: "Web Design",
                link: "/web-design"
              },
              {
                images: {
                  mobile: require("assets/images/home/mobile/image-graphic-design.jpg"),
                  tablet: require("assets/images/home/tablet/image-graphic-design.jpg"),
                },
                title: "Graphic Design",
                link: "/graphic-design"
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

export default AppDesign;