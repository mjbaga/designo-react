import Page from 'components/layout/Page';
import ImageLinkGroup from 'components/common/ImageLinkGroup';
import CallToActionBox from 'components/common/CallToActionBox';
import HeadingBox from 'components/common/HeadingBox';
import LinkCardGroup from 'components/common/LinkCardGroup';

const WebDesign = () => {

  return (
    <Page classes="web-design flow">
      <section>
        <div className="container mobile-no-pad">
          <HeadingBox
            type="bg-pattern-intro-web"
            title="Web Design"
            text="<p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <LinkCardGroup
            items={[
              {
                title: "Express",
                desc: "A multi-carrier shipping website for ecommerce businesses",
                image: require("assets/images/web-design/desktop/image-express.jpg"),
                link: '/'
              },
              {
                title: "Transfer",
                desc: "Site for low-cost money transfers and sending money within seconds",
                image: require("assets/images/web-design/desktop/image-transfer.jpg"),
                link: '/'
              },
              {
                title: "Photon",
                desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
                image: require("assets/images/web-design/desktop/image-photon.jpg"),
                link: '/'
              },
              {
                title: "Builder",
                desc: "Connects users with local contractors based on their location",
                image: require("assets/images/web-design/desktop/image-builder.jpg"),
                link: '/'
              },
              {
                title: "Blogr",
                desc: "Blogr is a platform for creating an online blog or publication",
                image: require("assets/images/web-design/desktop/image-blogr.jpg"),
                link: '/'
              },
              {
                title: "Camp",
                desc: "Get expert training in coding, data, design, and digital marketing",
                image: require("assets/images/web-design/desktop/image-camp.jpg"),
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
                  mobile: require("assets/images/home/mobile/image-app-design.jpg"),
                  tablet: require("assets/images/home/tablet/image-app-design.jpg")
                },
                title: "App Design",
                link: "/app-design"
              },
              {
                images: {
                  mobile: require("assets/images/home/mobile/image-graphic-design.jpg"),
                  tablet: require("assets/images/home/tablet/image-graphic-design.jpg")
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

export default WebDesign;