import Page from 'components/layout/Page';
import CallToActionBox from 'components/common/CallToActionBox';
import ImageTextPair from 'components/common/ImageTextPair';
import LocationLinks from 'components/common/LocationLinks';

import CanadaIllustration from 'assets/images/shared/desktop/illustration-canada.svg';
import AustraliaIllustration from 'assets/images/shared/desktop/illustration-australia.svg';
import UnitedKingdomIllustration from 'assets/images/shared/desktop/illustration-united-kingdom.svg';

const About = () => {

  return (
    <Page classes="about flow" leaf2="true">
      <section>
        <div className="container mobile-no-pad flow">
          <ImageTextPair
            imageSet={{
              mobile: require("assets/images/about/mobile/image-about-hero.jpg"),
              tablet: require("assets/images/about/tablet/image-about-hero.jpg"),
              desktop: require("assets/images/about/desktop/image-about-hero.jpg")
            }}

            alt="Hero image: About Us"
            type="dark"
          >
            <h1>About Us</h1>
            <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </ImageTextPair>
          <ImageTextPair
            imageSet={{
              mobile: require("assets/images/about/mobile/image-world-class-talent.jpg"),
              tablet: require("assets/images/about/tablet/image-world-class-talent.jpg"),
              desktop: require("assets/images/about/desktop/image-world-class-talent.jpg")
            }}

            alt="World-class Talent"
            type="light"
            order="image"
          >
            <h2 className="section-heading">World-class Talent</h2>
            <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
            <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
          </ImageTextPair>
        </div>
      </section>
      <section>
        <div className="container">
          <LocationLinks
            items={[
              {
                link: '/location',
                image: CanadaIllustration,
                location: 'Canada'
              },
              {
                link: '/location',
                image: AustraliaIllustration,
                location: 'Australia'
              },
              {
                link: '/location',
                image: UnitedKingdomIllustration,
                location: 'United Kingdom'
              },
            ]}
          />
        </div>
      </section>
      <section>
        <div className="container mobile-no-pad">
          <ImageTextPair
            imageSet={{
              mobile: require("assets/images/about/mobile/image-about-hero.jpg"),
              tablet: require("assets/images/about/tablet/image-about-hero.jpg"),
              desktop: require("assets/images/about/desktop/image-about-hero.jpg")
            }}

            alt="The real deal"
            type="light"
          >
            <h2 className="section-heading">The real deal</h2>
            <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
            <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
          </ImageTextPair>
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

export default About;