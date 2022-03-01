import Page from 'components/layout/Page';
import CallToActionBox from 'components/boxes/CallToActionBox';
import LocationLinks from 'components/cards/LocationLinks';
import CanadaIllustration from 'assets/images/shared/desktop/illustration-canada.svg';
import AustraliaIllustration from 'assets/images/shared/desktop/illustration-australia.svg';
import UnitedKingdomIllustration from 'assets/images/shared/desktop/illustration-united-kingdom.svg';
import ContactForm from 'components/forms/ContactForm';

const Contact = () => {

  return (
    <Page classes="about flow" leafClass="leaf-bottom">
      <section>
        <div className="container mobile-no-pad">
          <ContactForm>
            <h1>Contact Us</h1>
            <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
          </ContactForm>
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

export default Contact;