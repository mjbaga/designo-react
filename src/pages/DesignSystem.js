import Button from 'components/common/Button';
import styles from './DesignSystem.module.scss';

const DesignSystem = () => {

  return (
    <div className={`${styles["design-system"]}`}>
      <header className="bg-pattern-cta">
        <div className="container grid">
          <img src={require('assets/images/shared/desktop/logo-white.png')} alt="Designo Logo" />
          <h1 className="uppercase font-light fs-16">Web Design System</h1>
        </div>
      </header>
      <div className="container flow">
        <section className="flow">
          <h2 className="section-heading">Colors</h2>
          <p className="title">Primary Colors</p>
          <ul className={styles["color-groups"]}>
            <li className={styles["color-item"]}>
              <div className={`${styles["color-area"]} bg-primary`}></div>
              <div className={`${styles["color-desc"]} flow flow--space-small`}>
                <p className="uppercase bold">Peach</p>
                <p>HEX : #E7816B</p>
                <p>RGB : rgb(231, 129, 107)</p>
                <p>HSL : hsl(11°, 73%, 66%)</p>
              </div>
            </li>
            <li className={styles["color-item"]}>
              <div className={`${styles["color-area"]} bg-dark`}></div>
              <div className={`${styles["color-desc"]} flow flow--space-small`}>
                <p className="uppercase bold">Black</p>
                <p>HEX : #1D1C1E</p>
                <p>RGB : rgb(29, 28, 30)</p>
                <p>HSL : hsl(270°, 3%, 11%)</p>
              </div>
            </li>
            <li className={styles["color-item"]}>
              <div className={`${styles["color-area"]} bg-light`}></div>
              <div className={`${styles["color-desc"]} flow flow--space-small`}>
                <p className="uppercase bold">White</p>
                <p>HEX : #FFFFFF</p>
                <p>RGB : rgb(255, 255, 255)</p>
                <p>HSL : hsl(0°, 0%, 100%)</p>
              </div>
            </li>
          </ul>

          <p className="title">5 P</p>
          <ul className={styles["color-groups"]}>
            <li className={styles["color-item"]}>
              <div className={`${styles["color-area"]} bg-secondary`}></div>
              <div className={`${styles["color-desc"]} flow flow--space-small`}>
                <p className="uppercase bold">Light Peach</p>
                <p>HEX : #FFAD9B</p>
                <p>RGB : rgb(255, 173, 155)</p>
                <p>HSL : hsl(11°, 100%, 80%)</p>
              </div>
            </li>
            <li className={styles["color-item"]}>
              <div className={`${styles["color-area"]} bg-dark-gray`}></div>
              <div className={`${styles["color-desc"]} flow flow--space-small`}>
                <p className="uppercase bold">Dark Gray</p>
                <p>HEX : #333136</p>
                <p>RGB : rgb(51, 49, 54)</p>
                <p>HSL : hsl(264°, 5%, 20%)</p>
              </div>
            </li>
            <li className={styles["color-item"]}>
              <div className={`${styles["color-area"]} bg-light-gray`}></div>
              <div className={`${styles["color-desc"]} flow flow--space-small`}>
                <p className="uppercase bold">Light Gray</p>
                <p>HEX : #F1F3F5</p>
                <p>RGB : rgb(241, 243, 245)</p>
                <p>HSL : hsl(210°, 17%, 95%)</p>
              </div>
            </li>
          </ul>
        </section>
        <section className={`${styles.typography} grid flow`}>
          <h2 className="section-heading">Typography</h2>
          <p className="title">Font Family</p>
          <div className="grid">
            <p className="fs-24 uppercase">Jost</p>
            <p className="fs-20">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z !@#$%^&*()</p>
          </div>
          <div className="grid">
            <div className="flow">
              <p className="title">Heading</p>
              <div>
                <p className="small-label">H1 - JOST MEDIUM - 48PX - 48PX LINE</p>
                <p className="section-heading">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div>
                <p className="small-label">H2 - JOST MEDIUM - 40PX - 48PX LINE - +2 SPACING</p>
                <h2>The quick brown fox jumps over the lazy dog</h2>
              </div>
              <div>
                <p className="small-label">H3 - JOST MEDIUM - 20PX - 26PX LINE - +5 SPACING</p>
                <h3>The quick brown fox jumps over the lazy dog</h3>
              </div>
            </div>
            <div className="flow">
              <p className="title">Body</p>
              <div>
                <p className="small-label">BODY  - JOST REGULAR - 16PX - 26PX LINE</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nun. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>
              </div>
            </div>
            
          </div>
          
        </section>
        <section className={`${styles['buttons']} flow`}>
          <h2 className="section-heading">Buttons</h2>
          <div className="flex">
            <div className="bg-pattern-base center grid flow">
              <p className="font-light uppercase semi-bold">Button on dark</p>
              <Button link="#" classes="btn-light">Learn more</Button>
              <Button link="#" classes="btn-light active">Learn more</Button>
            </div>
            <div className="bg-light-gray center grid flow">
              <p className="uppercase semi-bold">Button on light</p>
              <Button link="#">Learn more</Button>
              <Button link="#" classes="active">Learn more</Button>
            </div>
          </div>
        </section>

      </div>
      <footer></footer>
    </div>
  )
}

export default DesignSystem;