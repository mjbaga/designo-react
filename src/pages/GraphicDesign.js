import Page from 'components/layout/Page';
import ImageLinkGroup from 'components/common/ImageLinkGroup';
import CallToActionBox from 'components/common/CallToActionBox';
import HeadingBox from 'components/common/HeadingBox';
import LinkCardGroup from 'components/common/LinkCardGroup';

const GraphicDesign = () => {

  return (
    <Page classes="app-design flow">
      <section>
        <div className="container mobile-no-pad">
          <HeadingBox
            type="bg-pattern-intro-app"
            title="Graphic Design"
            text="<p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>"
          />
        </div>
      </section>
      <section>
        <div className="container">
          <LinkCardGroup
            items={[
              {
                title: "Tim Brown",
                desc: "A book cover designed for Tim Brown’s new release, ‘Change’",
                image: require("assets/images/graphic-design/desktop/image-change.jpg"),
                link: '/'
              },
              {
                title: "Boxed Water",
                desc: "A simple packaging concept made for Boxed Water",
                image: require("assets/images/graphic-design/desktop/image-boxed-water.jpg"),
                link: '/'
              },
              {
                title: "Science",
                desc: "A poster made in collaboration with the Federal Art Project",
                image: require("assets/images/graphic-design/desktop/image-science.jpg"),
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

export default GraphicDesign;